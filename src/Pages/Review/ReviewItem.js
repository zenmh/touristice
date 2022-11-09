import React from "react";

const ReviewItem = ({ review }) => {
  const { img, name, email, opinion } = review;

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-8 w-8 rounded-full" src={img} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {opinion}
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
