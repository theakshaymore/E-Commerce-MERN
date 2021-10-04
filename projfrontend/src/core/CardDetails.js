import React, { useState, useEffect } from "react";
import Base from "./Base";
import { getSingleProduct } from "./helper/coreapicalls";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const CardDetails = ({ match }) => {
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [addedbtn, setAddedbtn] = useState(false);

  const addtoCart = true;

  const loadProduct = async (productId) => {
    await getSingleProduct(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadProduct(match.params.productId);
  }, []);

  const addToCart = () => {
    addItemToCart(product, () => setAddedbtn(true));
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={addToCart} className="btn col-10 my-4 my-btnn">
          <i class="fas fa-cart-plus text-white pe-1"></i>
          Add to Cart
          {/* <i className="bi bi-bag add-cart-icon" /> */}
        </button>
      )
    );
  };

  const showAddedButton = () => {
    return (
      <button onClick={addToCart} className="btn col-10 my-4 btn-success">
        <span>
          Added Successfully
          <i class="fas fa-thumbs-up ps-2"></i>
        </span>
      </button>
    );
  };

  return (
    <Base footer={true}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mt-5 img-fluid card-det-img">
            <ImageHelper product={product} />
          </div>
          <div className="col-lg-6 mt-5">
            <div className="conatiner-fluid">
              <p className="h3">{product ? product.name : "Name"}</p>
              <p className="text-muted text-uppercase small">
                {product ? product.category.name : "summer"}
              </p>
              <p className="small text-start">
                <span>
                  <i class="bi bi-star-fill text-warning px-1" />
                </span>
                <span>
                  <i class="bi bi-star-fill text-warning px-1" />
                </span>
                <span>
                  <i class="bi bi-star-fill text-warning px-1" />
                </span>
                <span>
                  <i class="bi bi-star-half text-warning px-1" />
                </span>
                <span>
                  <i class="bi bi-star text-warning px-1" />
                </span>
              </p>
              <p className="p-1">
                <strong>
                  <i className="fas fa-rupee-sign" />
                  {product ? product.price : "Price"}
                </strong>
              </p>
              <p className="">
                {product
                  ? product.description
                  : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,expedita"}
              </p>
              <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Model</strong>
                      </th>
                      <td>Tshirt-B&9GD</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Color</strong>
                      </th>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Delivery</strong>
                      </th>
                      <td>Mumbai, India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="">
                <p className="small">Select Size: </p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="M"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    M
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="L"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    L
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="XL"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    XL
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="XXL"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    XXL
                  </label>
                </div>
              </div>
              {addedbtn ? showAddedButton() : showAddToCart(addtoCart)}

              {/* <button className="btn col-10 my-4 my-btnn">Add to cart</button> */}
            </div>
          </div>
        </div>
        {/* TABSSSSSSSSSSS */}
        <div className="row">
          <div className="col-12 my-3">
            <div className="classic-tabs border rounded px-4 pt-1">
              <ul
                className="nav tabs-primary nav-justified"
                id="advancedTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active show text-danger"
                    id="description-tab"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-danger"
                    id="info-tab"
                    data-toggle="tab"
                    href="#info"
                    role="tab"
                    aria-controls="info"
                    aria-selected="false"
                  >
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-danger"
                    id="reviews-tab"
                    data-toggle="tab"
                    href="#reviews"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="advancedTabContent">
                <hr />
                {/* 1st Tab */}
                <div
                  className="tab-pane fade show active mt-5"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <h5>{product ? product.name : "Product Name"}</h5>
                  <p className="small text-muted text-uppercase mb-2">
                    {product ? product.category.name : "summer"}
                  </p>
                  <p className="small text-start">
                    <span>
                      <i class="bi bi-star-fill text-primary px-1" />
                    </span>
                    <span>
                      <i class="bi bi-star-fill text-primary px-1" />
                    </span>
                    <span>
                      <i class="bi bi-star-fill text-primary px-1" />
                    </span>
                    <span>
                      <i class="bi bi-star-half text-primary px-1" />
                    </span>
                    <span>
                      <i class="bi bi-star text-primary px-1" />
                    </span>
                  </p>
                  <h6>
                    <i className="fas fa-rupee-sign" />
                    {product ? product.price : "100"}
                  </h6>
                  <p className="pt-1">
                    {product
                      ? product.description
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente, ea delectus saepe esse adipisci ullam? Magnam quia nobis nulla?"}
                  </p>
                </div>
                {/* 2nd Tab */}
                <div
                  className="tab-pane fade mt-5"
                  id="info"
                  role="tabpanel"
                  aria-labelledby="info-tab"
                >
                  <h5>Additional Information</h5>
                  <table className="table table-striped table-bordered mt-3">
                    <thead>
                      <tr>
                        <th scope="row" className="w-150 dark-grey-text h6">
                          Weight
                        </th>
                        <td>
                          <em>0.3 kg</em>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="w-150 dark-grey-text h6">
                          Dimensions
                        </th>
                        <td>
                          <em>50 × 60 cm</em>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* 3rd Tab */}
                <div
                  className="tab-pane fade mt-5"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h5>
                    <span>1</span> review for{" "}
                    <span>{product ? product.name : "Product Name"}</span>
                  </h5>
                  <div className="media mt-3 mb-4">
                    <div className="media-body">
                      <div className="d-sm-flex justify-content-between">
                        <p className="mt-1 mb-2">
                          <strong>Akshay More </strong>
                          <span>– </span>
                          <span>January 28, 2021</span>
                        </p>
                        <p className="small text-start">
                          <span>
                            <i class="bi bi-star-fill text-primary px-1" />
                          </span>
                          <span>
                            <i class="bi bi-star-fill text-primary px-1" />
                          </span>
                          <span>
                            <i class="bi bi-star-fill text-primary px-1" />
                          </span>
                          <span>
                            <i class="bi bi-star-half text-primary px-1" />
                          </span>
                          <span>
                            <i class="bi bi-star text-primary px-1" />
                          </span>
                        </p>
                      </div>
                      <p className="mb-0">Nice one, love it!</p>
                    </div>
                    <hr />
                    <h5 className="mt-5">Add a review</h5>
                    <div className="my-3">
                      <p className="small text-start">
                        <span>
                          <i class="bi bi-star-fill text-primary px-1" />
                        </span>
                        <span>
                          <i class="bi bi-star-fill text-primary px-1" />
                        </span>
                        <span>
                          <i class="bi bi-star-fill text-primary px-1" />
                        </span>
                        <span>
                          <i class="bi bi-star-half text-primary px-1" />
                        </span>
                        <span>
                          <i class="bi bi-star text-primary px-1" />
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="md-form md-outline">
                        <label for="form76">Your review</label>
                        <textarea
                          id="form76"
                          className="md-textarea form-control pr-6"
                          rows="4"
                        ></textarea>
                      </div>

                      <div className="text-right pb-2 my-3">
                        <button type="button" className="btn my-btnn">
                          Add a review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default CardDetails;
