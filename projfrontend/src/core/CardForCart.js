import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const CardForCart = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Product";
  const cartDescrption = product ? product.description : "Product description";
  const cartPrice = product ? product.price : "Product Price";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block col-12 mt-2  rounded my-btn"
        >
          Add to Cart
          {/* <i className="bi bi-bag add-cart-icon" /> */}
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-sm btn-danger"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-dark text-start border-0 mt-2 border-bottom border-end">
      <div className="row no-gutters">
        <div className="col-sm-5">
          {getARedirect(redirect)}
          <div className="card-img" style={{ maxWidth: "500px" }}>
            <ImageHelper product={product} />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="card-body">
            <p className="card-title font-weight-normal text-wrap">
              <b> NAME:</b> {cartTitle}
            </p>
            <p>
              <b>PRICE:</b> {cartPrice} $
            </p>
            <div>{showRemoveFromCart(removeFromCart)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCart;
