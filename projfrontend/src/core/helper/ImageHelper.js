import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress`;
  return (
    <div className="">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="img-fluid rounded"
      />
    </div>
  );
};

export default ImageHelper;
