import { Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Service = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
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
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Customers
                </h5>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
              </div>
            </Card>
          </div>
          <div className="flex justify-center items-center">
            {user?.uid ? (
              <Link
                to={`/review/${_id}`}
                className="border-dashed border-2 border-gray-500 bg-stone-100 px-4 py-1"
              >
                + Add a Review
              </Link>
            ) : (
              <Link to="/login">
                <u>Login to add a review</u>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
