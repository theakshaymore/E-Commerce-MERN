import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect, Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const CardForBestseller = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [addedbtn, setAddedbtn] = useState(false);

  const cartTitle = product ? product.name : "Product";
  const cartDescrption = product ? product.description : "Product description";
  const cartPrice = product ? product.price : "Product Price";
  const cartCategory = product ? product.category.name : "summer";

  const addToCart = () => {
    setAddedbtn(true);
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cartdetails" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          type="button"
          className="btn btn-sm me-2 my-1 rounded my-btn2"
        >
          <i class="fas fa-shopping-cart"></i>Add to cart
        </button>
      )
    );
  };

  const showAddedButton = () => {
    return (
      <button
        onClick={addToCart}
        type="button"
        className="btn btn-sm btn-success me-2 my-1 rounded"
      >
        <span>
          Added
          <i class="fas fa-thumbs-up" />
        </span>
      </button>
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
          className="btn rounded my-btn  "
        >
          <i className="fas fa-shopping-cart pr-2"></i>
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div>
      <div className="card border-0 trending-card">
        <ImageHelper product={product} />
        <div className="card-body">
          <h5>{cartTitle}</h5>
          <p className="small text-muted text-uppercase">{cartCategory}</p>
          <hr />
          <h6 className="mb-3">
            <span className="text-danger me-1">
              <i className="fas fa-rupee-sign" />
              {cartPrice}
            </span>
            <span className="text-grey ms-2">
              <s>
                <i className="fas fa-rupee-sign" />
                500
              </s>
            </span>
          </h6>
          <div className="">
            {addedbtn ? showAddedButton() : showAddToCart(addtoCart)}

            <Link
              to={`/product/${product._id}`}
              className="btn btn-secondary btn-sm me-1 my-1 rounded "
            >
              <i class="fas fa-info-circle"></i>Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForBestseller;
