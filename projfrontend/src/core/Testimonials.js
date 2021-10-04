import React from "react";

import Base from "./Base";

const Testimonials = () => {
  return (
    <Base>
      <div className="container my-5 p-2">
        <p className="display-6 text-center text-danger">
          <i class="bi bi-layout-text-sidebar-reverse"></i> TESTIMONIALS
        </p>
        <p className="display-6 text-center fw-bold cart-totalbox">
          What Our Customers are Saying?
        </p>
        <p className="display-9 text-center cart-totalbox">
          We are very thankful to customers for sharing kinds words with us.
        </p>
        <div className="row mx-2 cart-totalbox">
          <div className="col-lg-4 col-md-4 my-3">
            <div class="card mt-2 border-0 shadow-lg rounded">
              <div class="card-body text-center">
                <p class="card-text text-start p-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h5 class="card-title text-danger">Im_Pd</h5>
                <h6 class="card-subtitle mb-2 text-muted">MGM Mumbai</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 my-3">
            <div class="card mt-2 border-0 shadow-lg rounded">
              <div class="card-body text-center">
                <p class="card-text text-start p-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h5 class="card-title text-danger">Rohit Sawant</h5>
                <h6 class="card-subtitle mb-2 text-muted">Mumbai University</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 my-3">
            <div class="card mt-2 border-0 shadow-lg rounded">
              <div class="card-body text-center">
                <p class="card-text text-start p-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h5 class="card-title text-danger">Atharva Katre</h5>
                <h6 class="card-subtitle mb-2 text-muted">Mumbai University</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Testimonials;
