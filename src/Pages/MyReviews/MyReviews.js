import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReview from "./MyReview";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useTitle("My Reviews");
  useEffect(() => {
    fetch(
      `https://touristics-server.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((revs) => {
        setReviews(revs);
        setRefresh(!refresh);
      })
      .catch((err) => console.error("Error", err));
  }, [user?.email, refresh]);
  const deleteReview = (id) => {
    const agree = window.confirm("Are sure to delete this review !");
    if (agree) {
      fetch(`https://touristics-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logout();
          }
          return res.json();
        })
        .then((data) => {
          if (data.deletedCount) {
            toast.info("Review Deleted !", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
        .catch((err) => console.error("Error", err));
    }
  };
  return (
    <div>
      <div className="w-full">
        <div>
          <h5 className="text-xl font-bold text-center my-8">My Reviews</h5>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {reviews.length === 0 ? (
              <div className="flex justify-center md:my-48">
                <h2 className="text-5xl font-bold text-slate-400">
                  No reviews were added yet !
                </h2>
              </div>
            ) : (
              <>
                {reviews.map((review) => (
                  <MyReview
                    key={review._id}
                    review={review}
                    deleteReview={deleteReview}
                  />
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
