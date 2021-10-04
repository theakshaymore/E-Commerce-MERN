import React from "react";
import Card from "./Card";
import CardForBestseller from "./CardForBestseller";

const BestSeller = ({ products }) => {
  return (
    <div className="container">
      <h4 class="text-center mt-5 cart-totalbox">
        <strong>Trending Now</strong>
      </h4>
      <p className="text-center mb-4 fst-italic cart-totalbox">
        Get them before they're gone!
      </p>
      <div className="row">
        {products.map(
          (product, index) =>
            index < 3 && (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-5">
                <CardForBestseller product={product} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default BestSeller;
