import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import logoImage from "../imgs/EMBRAND.png";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#e81a30" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => (
  <div>
    <nav className="container navbar navbar-expand-lg sticky-top">
      <a className="navbar-brand nav-brandname" href="#">
        Embrand
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon">
          <i class="bi bi-list"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item pe-2">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* About Us */}
          <li className="nav-item dropdown pe-2">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Us
            </a>
            <div
              className="dropdown-menu pe-2"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/about">
                About Us
              </a>
              <a className="dropdown-item" href="/testimonials">
                Testimonials
              </a>
            </div>
          </li>
          {/* Cart */}
          <li className="nav-item pe-2">
            <Link
              style={currentTab(history, "/cart")}
              className="nav-link"
              to="/cart"
            >
              <i class="fas fa-shopping-cart pe-1"></i>
              Cart
            </Link>
          </li>
          {/* More */}
          <li className="nav-item dropdown pe-2">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div
              className="dropdown-menu pe-2"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Feature_1
              </a>
              <a className="dropdown-item" href="#">
                Feature_2
              </a>
            </div>
          </li>
          {/* Profile */}
          {isAutheticated() && isAutheticated().user.role === 0 && (
            <li className="nav-item pe-2">
              <Link
                style={currentTab(history, "/user/dashboard")}
                className="nav-link"
                to="/user/dashboard"
              >
                <i class="far fa-user-circle pe-1"></i>
                Profile
              </Link>
            </li>
          )}
          {/* Admin */}
          {isAutheticated() && isAutheticated().user.role === 1 && (
            <li className="nav-item pe-2">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link"
                to="/admin/dashboard"
              >
                Admin
              </Link>
            </li>
          )}
          {/* Signout */}
          {isAutheticated() && (
            <li className="nav-item">
              <span
                className="nav-link text-white nav-btn"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
                <i class="fas fa-sign-out-alt ms-2"></i>
              </span>
            </li>
          )}

          {/* Join/Register */}
          {!isAutheticated() && (
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white btn nav-btn"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <i class="fas fa-sign-in-alt me-2"></i> */}
                <lord-icon
                  className="lordiicon"
                  src="https://cdn.lordicon.com/dxjqoygy.json"
                  trigger="loop"
                  colors="primary:#000000,secondary:#000000"
                ></lord-icon>
                Login/Register
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {!isAutheticated() && (
                  <Fragment>
                    <li className="dropdown-item text-dark">
                      <Link
                        style={currentTab(history, "/signup")}
                        className="nav-link"
                        to="/signup"
                      >
                        Signup
                      </Link>
                    </li>
                    <li className="dropdown-item text-dark">
                      <Link
                        style={currentTab(history, "/signin")}
                        className="nav-link"
                        to="/signin"
                      >
                        Sign In
                      </Link>
                    </li>
                  </Fragment>
                )}
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

export default withRouter(Menu);
