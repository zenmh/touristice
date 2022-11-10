import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const MyReview = ({ review, deleteReview }) => {
  const { _id, Img, title, opinion } = review;
  return (
    <div>
      <li className="grid grid-cols-3">
        <div className="flex">
          <img className="w-20 h-20 rounded-sm" src={Img} alt="" />
          <div className="flex items-center">
            <h2 className="font-bold text-xl pl-8">{title}</h2>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <p>{opinion}</p>
        </div>
        <div className="flex items-center justify-evenly">
          <Link to={`/myreview/${_id}`}>
            <Button size="xs" title="change my opinion" color="light">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => deleteReview(_id)}
            size="xs"
            title="delete the review"
            color="failure"
          >
            Remove
          </Button>
        </div>
      </li>
    </div>
  );
};

export default MyReview;
