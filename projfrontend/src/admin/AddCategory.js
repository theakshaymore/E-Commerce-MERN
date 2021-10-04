import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, token } = isAutheticated();

  const goBack = () => {
    return (
      <div className="mt-1">
        <Link
          className="btn btn-sm btn-danger mb-3 rounded"
          to="/admin/dashboard"
        >
          <i class="fas fa-home me-2" />
          Admin Home
        </Link>
      </div>
    );
  };

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Backend request
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setLoading(false);
        setError(data.error);
      } else {
        setLoading(false);
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          <h5 className="text-success">Category created successfully</h5>
        </div>
      );
    }
  };

  const warningMessage = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <h5 className="text-danger">Failed to create category!</h5>
        </div>
      );
    }
  };

  const loadingMessage = () => {
    if (loading) {
      return (
        <div className="alert alert-warning">
          <h5 className="text-dark">Please wait...</h5>
        </div>
      );
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group my-2">
          <p className="lead">Enter the category</p>
          <input
            type="text"
            className="form-control my-3"
            autoFocus
            required
            placeholder="For Ex. Summer"
            value={name}
            onChange={handleChange}
          ></input>
          <button
            className="btn btn-outline-danger rounded mb-3"
            onClick={onSubmit}
          >
            Create Category
            <i class="fas fa-plus-circle ms-2" />
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title="Add Category"
      description="Add a new category for new tshirts"
      className="container p-4 mt-5 profile-card-header"
    >
      {goBack()}
      <div className="row bg-light rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {loadingMessage()}
          {myCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
