import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import BestSeller from "./BestSeller";
import Card from "./Card";
import Categories from "./Categories";
import { getProducts } from "./helper/coreapicalls";
import Trending from "./Trending";
import MobileApp from "./MobileApp";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <div>
      <Base
      // title="Embrand"
      // description="Be exclusive, Be Devine, Be yourself."
      // className="my-5 py-5"
      >
        <Trending />
        <BestSeller products={products} />
        <Categories />
        {/* Our Products */}
        <div className="container my-5" id="godown">
          <hr />
          <h4 class="text-center cart-totalbox">
            <strong>Our Products</strong>
          </h4>
          <p className="text-center mb-4 fst-italic cart-totalbox">
            Available for men and women.
          </p>
          <div className="row my-5">
            {products.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-5">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="paginationAraa">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item text-secondary">
                <a className="page-link text-secondary" href="#">
                  1
                </a>
              </li>
              <li className="page-item text-secondary">
                <a className="page-link text-secondary" href="#">
                  2
                </a>
              </li>
              <li className="page-item text-secondary">
                <a className="page-link text-secondary" href="#">
                  3
                </a>
              </li>
              <li className="page-item text-secondary">
                <a className="page-link text-secondary" href="#">
                  ..
                </a>
              </li>
              <li className="page-item text-secondary">
                <a className="page-link text-secondary" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        {/* Android iOS App */}
        <MobileApp />
        <hr />
      </Base>
    </div>
  );
}
