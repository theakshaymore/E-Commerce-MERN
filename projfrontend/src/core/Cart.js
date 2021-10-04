import React, { useState, useEffect } from "react";
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

  return (
    <Base title="Shopping cart" description="" className="p-3 my-5">
      <div className="row">
        {/* Products List */}
        <div className="col-lg-6 mt-3 cart-totalbox">
          <h5 className="">
            {/* Your cart <i class="fas fa-shopping-cart ms-2" /> */}
            Your cart{" "}
            <lord-icon
              src="https://cdn.lordicon.com/fyhanzjw.json"
              trigger="loop"
              colors="primary:#121331,secondary:#e81a30"
            ></lord-icon>
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
            style={{ width: "400px" }}
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
                <span>Available</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total</strong>
                  <strong>
                    <p class="mb-0">(including All Taxes)</p>
                  </strong>
                </div>
                <span>
                  <strong>
                    {getAmount()}
                    <i className="fas fa-rupee-sign ms-1" />
                  </strong>
                </span>
              </li>
            </ul>
            <div class="row">
              <span>Add a discount code (optional)</span>
              <div class="col-5 mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter discount code"
                />
              </div>
              <div class="col-3 mt-3">
                <button className="btn btn-dark">Redeem</button>
              </div>
            </div>
            <Link to="/checkout" className="btn col-12 mt-5 rounded my-btn2">
              Go to checkout{" "}
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
              ></lord-icon>
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
