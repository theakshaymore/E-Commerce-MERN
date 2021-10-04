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
          <p className="alert alert-dark">No products to checkout</p>
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
      <p className="lead fw-bold text-danger">
        Payment <i class="fas fa-money-check-alt ms-2" />
      </p>

      <div class="mb-3">
        <div class="pt-4 cart-totalbox">
          <h5 class="mb-4 ">Expected shipping delivery</h5>

          <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>
      <div class="">
        <div class="pt-4">
          <h5 class="mb-4">We accept</h5>

          <img
            class="me-3"
            width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa"
          />
          <img
            class="me-3"
            width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express"
          />
          <img
            class="me-3"
            width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard"
          />
        </div>
      </div>
      <div className="mt-2">{modal && showModal()}</div>

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
