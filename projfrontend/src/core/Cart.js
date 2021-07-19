import React, { useState, useEffect } from "react";
import "../styles.css";
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
      <div>
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

  return (
    <Base title="User Cart" description="Ready to checkout">
      <div className="row">
        {/* Products List */}
        <div className="col-lg-6 mt-2">
          <p className="lead fw-bold">Your cart</p>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3 className="lead">No Products in Cart</h3>
          )}
        </div>
        {/* Address  */}
        <div className="col-lg-6 mt-2">
          <form>
            <p className="lead fw-bold">Shipping address</p>
            <div className="form-group">
              <label for="exampleInputEmail1">Mobile No</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="form-group mt-2">
              <label for="exampleInputPassword1">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group mt-1">
              <label for="exampleInputPassword1">Address line 2</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Apartment or suite"
              />
            </div>
            <div class="row mt-2">
              <div class="col">
                <label>City</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col">
                <label>State</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col">
                <label>Pincode</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group form-check mt-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Save this information for next time
              </label>
            </div>
          </form>
        </div>
        {/* Payment */}
        <div className="col-lg-6 mt-5">
          <Paymentb products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
