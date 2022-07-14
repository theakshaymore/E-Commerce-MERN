import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/helper";
import SigninSVG from "../imgs/signin.svg";

const Signin = () => {
  const [values, setValues] = useState({
    email: "dummyuser@gmail.com",
    password: "dummyuser@123",
    error: "",
    loading: false,
    didRedirecrt: false,
  });

  const { email, password, error, loading, didRedirecrt } = values;

  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirecrt: true });
          });
        }
      })
      .catch(console.log("Error in signin"));
  };

  const performRedirect = () => {
    if (didRedirecrt) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  // offset-sm-3
  const signInForm = () => {
    return (
      <div className="row mt-5 pt-5">
        <div className="col-lg-5 container-fluid text-left">
          <h2 className="h1 text-center cart-totalbox fw-bold">
            Welcome back.
          </h2>
          <p className="lead text-center my-text">
            To continue, log in to Embrand
          </p>
          <form>
            <div className="form-group mt-5">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                className="form-control"
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn col-12 rounded mt-4 cart-totalbox my-btn2"
            >
              Signin{" "}
              <lord-icon
                src="https://cdn.lordicon.com/qvzrpodt.json"
                trigger="loop"
                colors="primary:#FFFFFF,secondary:#FFFFFF"
              ></lord-icon>
            </button>
          </form>
        </div>
        <div className="col-lg-5 container-fluid">
          <img src={SigninSVG} alt="signin" className="img-fluid" />
        </div>
      </div>
    );
  };

  return (
    <Base
      // title="Welcome back."
      // description="To continue, log in to Embrand"
      footer={false}
    >
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signin;
