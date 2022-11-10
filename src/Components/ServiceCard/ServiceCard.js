import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoSlider } from "react-photo-view";
import Spinner1 from "../Spinners/Spinner1";

const ServiceCard = ({ service }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const { _id, img, title, about, rating, price } = service;
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((err) => console.error("Error", err));
  }, []);
  if (isLoading) {
    return <Spinner1 />;
  }

  return (
    <div>
      <PhotoSlider
        images={services.map((item) => ({ src: item.img, key: item._id }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />
      <div className="border-2">
        <img onClick={() => setVisible(true)} primary="true" src={img} alt="" />
        <div className="font-bold pl-4">
          <h2 className="my-2">{title}</h2>
          <p className="my-2">Rating : {rating}</p>
          <p className="my-2">Price : ${price}</p>
        </div>
        <p className="pl-4">{about}</p>
        <Link to={`/service/${_id}`}>
          <Button className="w-full mt-4" gradientMonochrome="teal">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
