import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteProduct, getAllProducts } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base
      title="Manage Products"
      description="Update and Delete products here"
      className="mx-2"
    >
      <div className="card border-0">
        <Link to={`/admin/dashboard`}>
          <button className="btn btn-dark">
            <i class="fas fa-home me-2" />
            Admin Home
          </button>
        </Link>

        <div className="row mt-5">
          <div className="col-12">
            <table class="table table-striped">
              <thead className="bg-dark text-white lead">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Update Product</th>
                  <th scope="col">Delete product</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="">{product.name}</td>
                      <td>
                        <Link
                          className="btn btn-sm btn-success"
                          to={`/admin/product/update/${product._id}`}
                        >
                          <span>Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisProduct(product._id);
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

export default ManageProducts;
