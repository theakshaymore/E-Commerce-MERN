import React from "react";
import AndoirdandiosSVG from "../imgs/andoidandios.svg";

const MobileApp = () => {
  return (
    <div className="container mt-5 mobile-show-box">
      <div className="row">
        <div className="col-lg-6 container-fluid">
          <h2 className="fs-1 fw-bolder my-text">
            Embrand is on web, Android and iOS
          </h2>
          <p className="fw-light fst-italic mb-3 cart-totalbox">
            You can get shopping related things with embrand using web or our
            mobile app
          </p>
          <ul class=" lead list-group border-0 fw-bold">
            <li class="list-group-item border-0">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#000000,secondary:#000000"
              ></lord-icon>
              Latest clothes
            </li>
            <li class="list-group-item border-0">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#000000,secondary:#000000"
              ></lord-icon>
              Promotion & discount code
            </li>
            <li class="list-group-item border-0">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#000000,secondary:#000000"
              ></lord-icon>
              An easy-to-use checkout
            </li>
            <li class="list-group-item border-0">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#000000,secondary:#000000"
              ></lord-icon>
              24x7 Services
            </li>
            <li class="list-group-item border-0">
              <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="loop"
                colors="primary:#000000,secondary:#000000"
              ></lord-icon>
              Dedicated team to solve queries
            </li>
          </ul>
          <p className="my-2 fw-light fst-italic cart-totalbox">
            We will make sure that shopping experience is fun, you just make
            sure to be consistent.
          </p>
          <p className="fw-light fst-italic mt-2 my-text">
            Not just an ordinary fashion website!
          </p>
          <button className="btn rounded me-2 mt-3 my-btn3">
            <i class="fas fa-arrow-right me-2"></i>
            Get Android App
          </button>
          {/* <button className="btn rounded ms-2 mt-3 my-btn3">
            <i class="fas fa-arrow-right me-2"></i>
            Get iOS App
          </button> */}
        </div>
        <div className="col-lg-6 container-fluid">
          <img
            src={AndoirdandiosSVG}
            alt="React Logo"
            height="600"
            width="450"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
