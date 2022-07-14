import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect, Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
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

  // add to cart btn
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="col-5 btn rounded m-1 my-btn"
          id="liveToastBtn"
        >
          <i class="fas fa-shopping-cart pe-1"></i>
          Cart
          <lord-icon
            src="https://cdn.lordicon.com/jvihlqtw.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffffff"
          ></lord-icon>
        </button>
      )
    );
  };

  // after adding btn
  const showAddedButton = () => {
    return (
      <Link to="/cart">
        <button className="col-5 btn rounded m-1 btn-success">
          <i class="fas fa-shopping-cart pe-1"></i>
          Go to cart
        </button>
      </Link>
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
    <div className="card my-card">
      <ImageHelper product={product} />
      <div className="card-body text-center">
        {/* {getARedirect(redirect)} */}
        <h5 className="">{cartTitle}</h5>
        <p className="small text-muted text-uppercase mb-2">{cartCategory}</p>
        <p className="text-center my-0">
          <span>
            <i className="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i className="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i className="bi bi-star-fill text-warning px-1" />
          </span>
          <span>
            <i className="bi bi-star-half text-warning px-1" />
          </span>
          <span>
            <i className="bi bi-star text-warning px-1" />
          </span>
        </p>
        <hr />
        <h6 className="mb-3">
          <i className="fas fa-rupee-sign pe-2" />
          <span>{cartPrice}</span>
        </h6>
        {addedbtn ? showAddedButton() : showAddToCart(addtoCart)}
        <Link
          to={`/product/${product._id}`}
          className="col-5 btn m-1 rounded my-btn3"
        >
          Details
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffffff"
          ></lord-icon>
          {/* <i class="fas fa-info-circle pr-2"></i> */}
        </Link>
      </div>
    </div>
  );
};

export default Card;
