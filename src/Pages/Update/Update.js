import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Update = () => {
  useTitle("Review Update");
  const navigate = useNavigate();
  const {
    _id,
    service_id,
    email,
    userImg,
    Img,
    price,
    rating,
    title,
    opinion,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const opinion = form.opinion.value;
    const review = {
      service_id,
      email,
      userImg,
      Img,
      price,
      rating,
      name,
      title,
      opinion,
    };
    fetch(`http://localhost:5000/myreview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Updated Successfully", {
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
        navigate("/myreviews");
      })
      .catch((err) => console.error("Error", err));
  };
  return (
    <div>
      <h2>This is Update</h2>
      <form onSubmit={handleUpdate} className="mx-3">
        <h2 className="text-3xl font-bold text-slate-600">{title}</h2>
        <div className="flex">
          <input
            className="w-full mr-2 first-line: px-2 my-4"
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            required
          />
          <input
            className="w-full ml-2 first-line: px-2 my-4"
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
          />
          <br />
        </div>
        <textarea
          name="opinion"
          className="w-full px-2 my-4"
          placeholder="Write Your Opinion"
          defaultValue={opinion}
        ></textarea>
        <Button type="submit" gradientMonochrome="teal" className="w-full">
          Update
        </Button>
      </form>
    </div>
  );
};

export default Update;
