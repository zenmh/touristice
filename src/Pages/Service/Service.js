import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const service = useLoaderData();
  const { _id, title, img, about, rating, price } = service;

  return (
    <div className="mb-96">
      <div className="border-2 p-4">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h2>Price : ${price}</h2>
        <h4>Rating : {rating}</h4>
        <p>Description : {about}</p>
      </div>
      <div className="border-2">
        <h2 className="text-2xl font-bold text-center">Reviews From Gusets</h2>
        <div className="flex justify-between">
          <div>
            <li>Good</li>
            <li>Good</li>
            <li>Good</li>
            <li>Good</li>
            <li>Good</li>
          </div>
          <div>
            <Link to={`/review/${_id}`}>Add a Review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
