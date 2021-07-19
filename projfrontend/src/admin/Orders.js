import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { listAllOrders } from "./helper/adminapicall";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    listAllOrders().then((data) => {
      console.log(data);
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

  //   const deleteThisCategory = (categoryId) => {
  //     deleteCategory(categoryId, user._id, token).then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         preload();
  //       }
  //     });
  //   };

  return (
    <Base title="Welcome admin" description="Manage products here">
      <Link className="btn btn-dark" to={`/admin/dashboard`}>
        <i className="bi bi-arrow-left-short text-white" />
        <span className="">Admin Home</span>
      </Link>
      <h2 className="mt-2">All Orders:</h2>
      <div className="row">
        <div className="col-12">
          {orders.map((order, index) => {
            return (
              <div key={index} className="row text-center">
                <div className="col-2 list-group-item">
                  {/* <h2 className="h5 border-bottom">Order Status</h2> */}
                  <h3 className="btn bg-success lead text-white rounded">
                    {order.status}
                  </h3>
                </div>
                <div className="col-5 list-group-item">
                  {/* <h2 className="h5 border-bottom">Product Name</h2> */}
                  <h3 className="lead text-dark text-left">
                    {order.products.map((product) => (
                      <p>{product.name}</p>
                    ))}
                  </h3>
                </div>
                <div className="col-3 list-group-item">
                  {/* <h2 className="h5 border-bottom">Price</h2> */}
                  <h3 className="btn lead text-dark text-left">
                    {order.products.map((product) => (
                      <p>$ {product.price}</p>
                    ))}
                  </h3>
                </div>
                <div className="col-2 list-group-item">
                  {/* <h2 className="h5 border-bottom">Quantity</h2> */}
                  <h3 className="lead text-dark text-left">
                    {order.products.map((product) => (
                      <p>{product.count}</p>
                    ))}
                  </h3>
                </div>
                {/* <div className="col-4">
                  <Link
                    className="btn btn-success "
                    to={`/admin/category/update/${order._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(order._id);
                    }}
                    className="btn btn-danger "
                  >
                    Delete
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Orders;