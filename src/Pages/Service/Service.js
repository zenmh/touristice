import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewItem from "../Review/ReviewItem";

const Service = () => {
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, img, about, rating, price } = service;
  useTitle("Service");

  useEffect(() => {
    fetch(`http://localhost:5000/itemReviews?title=${title}`)
      .then((res) => res.json())
      .then((reviewsData) => setReviews(reviewsData))
      .catch((err) => console.error("Error", err));
  }, [title, reviews]);

  return (
    <div className="mb-96 p-4">
      <div className="grid grid-cols-2">
        <img src={img} alt="" />
        <div className="pl-8">
          <h2 className="font-bold text-lg my-1">{title}</h2>
          <h2 className="font-bold text-lg my-1">Price : ${price}</h2>
          <h4 className="font-bold text-lg my-1">Rating : {rating}</h4>
          <p>
            <span className="font-bold text-lg">Description : </span>
            {about}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers Review
            </h5>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {reviews.map((review) => (
                <ReviewItem key={review._id} review={review} />
              ))}
            </ul>
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
                <u className="font-bold">Login to add a review</u>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
