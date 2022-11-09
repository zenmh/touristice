import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoSlider } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const { _id, img, title, about, rating, price } = service;
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.error("Error", err));
  }, []);

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

        <h2>{title}</h2>
        <p>Rating : {rating}</p>
        <p>Price : {price}</p>
        <p>{about}</p>
        <Link to={`/service/${_id}`}>
          <Button gradientMonochrome="teal">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

/**<Card imgAlt="" imgSrc={img}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5>Rating : {rating}</h5>
        <h5>Price : {price}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{about}</p>
        <div>
          <Link to={`/service/${_id}`}>
            <Button gradientMonochrome="teal">View Details</Button>
          </Link>
        </div>
      </Card> 
 */
