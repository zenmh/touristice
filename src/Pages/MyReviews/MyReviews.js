import { Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewItem from "../Review/ReviewItem";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((revs) => setReviews(revs));
  }, [user?.email]);
  return (
    <div>
      <div className="w-full">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers
            </h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {reviews.map((review) => (
                <ReviewItem key={review._id} review={review} />
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyReviews;
