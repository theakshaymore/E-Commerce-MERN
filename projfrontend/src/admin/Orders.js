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
    <Base title="Welcome admin" description="Manage orders here">
      <Link className="btn btn-dark" to={`/admin/dashboard`}>
        <i class="fas fa-home me-2" />
        <span className="">Admin Home</span>
      </Link>
      <div className="row mt-5">
        <div className="col-12">
          <table class="table table-striped">
            <thead className="bg-dark text-white lead">
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td className="text-success">{order.status}</td>
                    <td>
                      {order.products.map((product) => (
                        <p>{product.name}</p>
                      ))}
                    </td>
                    <td>
                      {order.products.map((product) => (
                        <p>$ {product.price}</p>
                      ))}
                    </td>
                    <td>
                      {order.products.map((product) => (
                        <p>{product.count}</p>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Base>
  );
};

export default Orders;
