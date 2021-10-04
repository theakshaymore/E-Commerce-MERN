import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteCategory, getAllCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base
      title="Manage Categories"
      description="Update category for tshirts"
      className="mx-2"
    >
      <div className="card border-0">
        <Link to={`/admin/dashboard`}>
          <button className="btn btn-dark">
            <i className="bi bi-arrow-left-short text-white" />
            Admin Home
          </button>
        </Link>

        <div className="row mt-5">
          <div className="col-12">
            <table class="table table-striped">
              <thead className="bg-dark text-white lead">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Update category</th>
                  <th scope="col">Delete category</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-success">{category.name}</td>
                      <td>
                        <Link
                          className="btn btn-sm btn-success"
                          to={`/admin/category/update/${category._id}`}
                        >
                          <span>Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisCategory(category._id);
                          }}
                          className="btn btn-sm btn-success"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
