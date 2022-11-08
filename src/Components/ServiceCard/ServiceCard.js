import { Button, Card } from "flowbite-react";
import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, about, rating, price } = service;
  return (
    <div>
      <Card imgAlt="" imgSrc={img}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5>Rating - {rating}</h5>
        <h5>Price : {price}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{about}</p>
        <div>
          <Button gradientMonochrome="teal">View Details</Button>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
