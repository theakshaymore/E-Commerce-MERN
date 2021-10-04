import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Base from "./Base";
import Paymentb from "./Paymentb";
import { loadCart } from "./helper/cartHelper";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };
  return (
    <Base>
      <div className="my-5">
        <div className="row my-5 gx-0">
          <div className="col-lg-6 cart-totalbox">
            <form className="ms-4">
              <p className="lead fw-bold text-danger">
                Shipping address <i class="fas fa-map-marked-alt ms-2" />
              </p>
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
          <div className="col-lg-6">
            <div
              className="container card border-0 cart-totalbox"
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Paymentb products={products} setReload={setReload} />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Checkout;
