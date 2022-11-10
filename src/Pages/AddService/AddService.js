import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  const navigate = useNavigate();
  useTitle("Add Service");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const about = form.about.value;
    const service = {
      title,
      img,
      price,
      rating,
      about,
    };
    fetch("https://touristics-server.vercel.app/allServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("New Service Added", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate("/services");
          form.reset();
        }
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="mx-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="px-2"
            placeholder="Service Name"
            type="text"
            name="title"
          />
          <input
            className="px-2"
            placeholder="Drop Image url"
            type="text"
            name="image"
          />

          <input
            className="px-2"
            placeholder="Service Price"
            type="number"
            name="price"
          />
          <input
            className="px-2"
            placeholder="Rate How Many Star"
            type="number"
            name="rating"
          />
        </div>
        <textarea
          name="about"
          className="w-full mt-4"
          placeholder="Description About The Service"
        ></textarea>
        <Button className="w-full mt-4" type="submit" gradientMonochrome="cyan">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddService;
