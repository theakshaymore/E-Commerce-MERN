import React from "react";

function Trending() {
  return (
    <div className="jumbotron-fluid jumbotron-image my-banner">
      <div className="container-fluid col-9 banner-text">
        <p className="lead text-wrap">Women Collection 2021</p>
        <p className="display-6">New Arrivals</p>
        <a className="btn btn-lg my-btn2" href="#godown">
          SHOP NOW{" "}
          <lord-icon
            src="https://cdn.lordicon.com/lupuorrc.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffffff"
          ></lord-icon>
        </a>
      </div>
    </div>
  );
}

export default Trending;
