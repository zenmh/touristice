import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const service = useLoaderData();
  const { title, img, about, rating, price } = service;

  return (
    <div>
      <div className="border-2 p-4">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h2>Price : ${price}</h2>
        <h4>Rating : {rating}</h4>
        <p>Description : {about}</p>
      </div>
      <div className="border-2"></div>
    </div>
  );
};

export default Service;
