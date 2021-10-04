import React from "react";

const Categories = () => {
  return (
    <div className="container">
      <h4 class="text-center my-5 cart-totalbox">
        <strong>Categories</strong>
      </h4>
      <div className="row categories-main">
        <div class="col-md-6 col-lg-4 mb-4 categories z-depth-5">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(1).jpg"
              alt="Sample"
            />

            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Dresses</h5>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div class="col-md-6 col-lg-4 mb-4 categories">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(2).jpg"
              alt="Sample"
            />
            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Shirts</h5>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div class="col-md-6 col-lg-4 mb-4 categories">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(3).jpg"
              alt="Sample"
            />
            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Jeans</h5>
            </div>
          </div>
        </div>
        {/* 4th */}
        <div class="col-md-6 col-lg-4 mb-4 categories">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(4).jpg"
              alt="Sample"
            />
            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Shoes</h5>
            </div>
          </div>
        </div>
        {/* 5th */}
        <div class="col-md-6 col-lg-4 mb-4 categories">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(5).jpg"
              alt="Sample"
            />
            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Accessories</h5>
            </div>
          </div>
        </div>
        {/* 6th */}
        <div class="col-md-6 col-lg-4 mb-4 categories">
          <div class="view zoom brighten z-depth-2 rounded">
            <img
              class="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(6).jpg"
              alt="Sample"
            />
            <div class="d-flex align-items-end h-100 p-3 categories-text">
              <h5 class="mb-0 text-white">Jewelry</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
