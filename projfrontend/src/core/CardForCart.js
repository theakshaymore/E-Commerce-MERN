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
          className="btn rounded px-3 my-btn2"
        >
          <i class="fas fa-trash-alt" />
        </button>
      )
    );
  };

  return (
    <div className="card text-dark text-start border-0 mt-2 mb-5 border-bottom border-end">
      <div className="row no-gutters">
        <div className="col-sm-5">
          {getARedirect(redirect)}
          <div className="card-img" style={{ maxWidth: "500px" }}>
            <ImageHelper product={product} />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5>{cartTitle}</h5>
                <p class="mb-2 text-muted text-uppercase small">
                  Category - {product.category.name}
                </p>
                <p class="mb-2 text-muted text-uppercase small">Size: M</p>
                <p class="mb-2 text-muted text-uppercase small">
                  Price: <i className="fas fa-rupee-sign"></i>
                  {cartPrice}
                </p>
                <p class="mb-2 text-muted small">
                  <i class="fas fa-check text-success me-1"></i>
                  In stock
                </p>
              </div>
              <div>
                <div>{showRemoveFromCart(removeFromCart)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCart;
