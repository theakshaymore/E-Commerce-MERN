import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";
import { isAutheticated } from "../auth/helper";
import CardForCart from "./CardForCart";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [reedem, setReedem] = useState("");

  const totalPrice = useRef();
  const theOG = useRef();

  const addDiscount = () => {
    if (reedem == "IMPD") {
      getAmountAfterRedeem(50);
      totalPrice.current.style.color = "green";
    } else if (reedem == "SLAYERVAAISEXY") {
      getAmountAfterRedeem(150);
      totalPrice.current.style.color = "green";
    } else if (
      reedem == "RANVEERBHAISEXY" ||
      reedem == "HARDIKBHAISEXY" ||
      reedem == "NIKHILISHERO"
    ) {
      getAmountAfterRedeem(200);
      totalPrice.current.style.color = "green";
    } else if (reedem == "BLOODCLAATYANG") {
      getAmountAfterRedeem("OpBroOp");
      totalPrice.current.style.color = "green";
      // console.log(theOG);
      theOG.current.innerHTML = "You are OG bro, You are SPECIAL";
      theOG.current.style.color = "Green";
    } else if (reedem == "RANVEERTOLTI") {
      getAmountAfterRedeem("OpBroOp");
      totalPrice.current.style.color = "green";
      theOG.current.innerHTML =
        "Congratulations !!! for getting selected for LTI 🥳🎉🎈  FREE CLOTHES FOR YOU 👔👕👖";
      theOG.current.style.color = "Green";
    }
  };

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div className="mt-5">
        {products.map((product, index) => (
          <CardForCart
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const getAmountAfterRedeem = (percent) => {
    let amount = percent == "OpBroOp" ? 0 : 50;
    products.map((p) => {
      amount = amount + p.price;
    });
    setDiscount(amount - percent);
  };

  return (
    <Base title="" description="" className="p-0 my-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb ">
            <li class="breadcrumb-item ">
              <a href="/" className="text-danger">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active  " aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
      </div>
      <div className="row no-gutters">
        {/* Products List */}
        <div className="col-lg-6 mt-3 cart-totalbox">
          <h5 className="">
            {/* Your cart
            <lord-icon
              src="https://cdn.lordicon.com/fyhanzjw.json"
              trigger="loop"
              colors="primary:#121331,secondary:#e81a30"
            ></lord-icon> */}
          </h5>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3 className="lead">
              No Products in Cart <i class="far fa-frown" />
            </h3>
          )}
        </div>
        {/* Calculations  */}
        <div className="col-lg-6 mt-3 cart-totalbox">
          <div
            className="container card border-0 py-4 "
            style={{ width: "300px" }}
          >
            <h5 className="">The total amount of</h5>
            <ul class="list-group list-group-flush mt-5">
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 mb-1">
                Temporary amount
                <span>
                  {getAmount()}
                  <i className="fas fa-rupee-sign ms-1" />
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 mb-1">
                Shipping
                <span>
                  50
                  <i className="fas fa-rupee-sign ms-1" />
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total</strong>
                  <strong>
                    <p class="mb-0">(including All Taxes)</p>
                  </strong>
                </div>
                <span ref={totalPrice} style={{ color: "black" }}>
                  <strong>
                    {discount == 0 ? getAmount() + 50 : discount}
                    <i className="fas fa-rupee-sign ms-1" />
                  </strong>
                </span>
              </li>
            </ul>
            <div class="row">
              <span ref={theOG} style={{ color: "Black" }}>
                Add a discount code (optional)
              </span>
              {/* <span className="text-muted">Add a discount code (optional)</span> */}
              <div class="col-5 mt-3">
                <input
                  type="text"
                  class="form-control"
                  value={reedem}
                  onChange={(e) => setReedem(e.target.value)}
                />
              </div>
              <div class="col-3 mt-3">
                <button className="btn btn-dark" onClick={addDiscount}>
                  Redeem
                </button>
              </div>
              <span className="text-muted mt-2">
                *use code IMPD for free shipping
              </span>
            </div>
            <Link
              to="/checkout"
              className="btn btn-block col-12 mt-5 rounded my-btn2"
            >
              Go to checkout
            </Link>
          </div>
        </div>
        {/* Payment */}
        <div className="col-lg-6">
          {/* <Paymentb products={products} setReload={setReload} /> */}
          <div class="mb-3">
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
        </div>
      </div>
    </Base>
  );
};

export default Cart;
