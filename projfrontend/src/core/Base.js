import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "",
  description = "",
  className = "",
  footer = true,
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid wrapper">
      <div className="jumbotron text-center rounded">
        <h2 className="display-4 my-jumo-btn">{title}</h2>
        <p className="lead text-danger my-jumo-btn">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    {/* Footer */}
    {footer && (
      <footer className="footer mt-auto">
        <div className="container-fluid bg-dark text-white text-center py-3">
          <div className="text-center p-4">
            © 2021 Copyright:
            <span className="text-reset fw-bold">EmBrand.com</span>
            <p className="pt-2">Find it, love it, buy it.</p>
            {/* <p className="pt-2">Be exclusive, Be Devine, Be yourself.</p> */}
          </div>
          <h6>If you got any questions, feel free to reach out</h6>
          {/* <button className="btn btn-warning btn-md">Contact us</button> */}
        </div>
      </footer>
    )}
  </div>
);

export default Base;
