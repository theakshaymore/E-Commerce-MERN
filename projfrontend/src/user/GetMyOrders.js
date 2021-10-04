import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { getMyOrders } from "./helper/userapicalls";

const GetMyOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getMyOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base
      title="Manage Orders"
      description=""
      className="container p-4 rounded my-profile-card"
    >
      <div className="card border-0">
        <Link to={`/user/dashboard`}>
          <button className="btn btn-dark">
            <i className="bi bi-arrow-left-short text-white" />
            User Home
          </button>
        </Link>
        <h4 className="card-header text-white my-3 rounded profile-card-header">
          <i class="bi bi-arrow-return-right me-2"></i>
          All Orders
        </h4>
        <div className="row">
          <div className="col-12">
            {orders.map((order, index) => {
              return (
                <div key={index} className="row text-center">
                  <div className="col-4 list-group-item">
                    <h3 className="text-dark text-start">{order.name}</h3>
                  </div>
                  <div className="col-4 list-group-item">
                    <Link
                      className="btn btn-warning rounded"
                      to={`/admin/category/update/`}
                    >
                      <span>Update</span>
                    </Link>
                  </div>
                  <div className="col-4 list-group-item">
                    <button
                      onClick={() => {
                        // deleteThisCategory(category._id);
                      }}
                      className="btn btn-danger rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default GetMyOrders;
