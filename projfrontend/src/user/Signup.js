import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import SignupSVG from "../imgs/signup.svg";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row mt-5 pt-5 gx-0">
        <div className="container col-lg-5 col-md-6 col-sm-12 text-left">
          <h2 className="h1 text-center cart-totalbox">Sign up</h2>
          <p className="lead text-center my-text">Create an Embrand Account!</p>
          <form>
            <div className="form-group mt-5">
              <label className="text-dark">Name</label>
              <input
                onChange={handleChange("name")}
                className="form-control"
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                className="form-control"
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-dark/">Password</label>
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
              Sign Up
              <lord-icon
                src="https://cdn.lordicon.com/qvzrpodt.json"
                trigger="loop"
                colors="primary:#FFFFFF,secondary:#FFFFFF"
              ></lord-icon>
            </button>
          </form>
        </div>
        <div className="container col-lg-5 col-md-6 col-sm-12 ">
          <img src={SignupSVG} alt="React Logo" className="img-fluid" />
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
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

  return (
    <Base
      // title="Sign up"
      // description="Create an Embrand Account!"
      footer={false}
    >
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
