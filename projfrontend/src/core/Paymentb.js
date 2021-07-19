import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { getmeToken, processPayment } from "./helper/paymentBHelper";
import { createOrder } from "./helper/orderHelper";
import DropIn from "braintree-web-drop-in-react";

const Paymentb = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const [modal, setModal] = useState(false);

  const userId = isAutheticated() && isAutheticated().user._id;
  const token = isAutheticated() && isAutheticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then((info) => {
      //   console.log("INFO: ", info);
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const showBtDropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button className="btn col-12 rounded my-btnn" onClick={onPurchase}>
              Place order
            </button>
          </div>
        ) : (
          <h3 className="alert alert-dark">No products to checkout</h3>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getAmount(),
      };
      processPayment(userId, token, paymentData)
        .then((response) => {
          setInfo({ ...info, success: response.success, loading: false });
          console.log("PAYMENT SUCCESS");
          //   create an order
          const orderData = {
            products: products,
            transaction_id: response.transaction.id,
            amount: response.amount,
          };
          createOrder(userId, token, orderData);
          //    empty the cart
          cartEmpty(() => {
            console.log("Did we get crash!");
          });
          // trigger modal
          setModal(true);
          //    force reload
          setReload(!reload);
        })
        .catch((err) => {
          setInfo({ loading: false, success: false });
          console.log("PAYMENT FAILED");
        });
    });
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const showModal = () => {
    return <p className="alert alert-success">Payment Successful</p>;
  };

  return (
    <div className="m-2 p-2">
      {modal && showModal()}
      <p className="lead fw-bold">Payment</p>
      <div className="alert alert-dark">
        <h3 className="lead">Total (USD) ${getAmount()}</h3>
        <div class="row no-gutters">
          <div class="col-3">
            <input type="text" class="form-control" placeholder="Promo code" />
          </div>
          <div class="col-3">
            <button className="btn btn-dark">Redeem</button>
          </div>
        </div>
      </div>
      {isAutheticated() ? (
        showBtDropIn()
      ) : (
        <h3 className="alert alert-dark">Signin to checkout</h3>
      )}
      {}
    </div>
  );
};

export default Paymentb;
