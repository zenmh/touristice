import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import Slider from "../../../Components/Slider/Slider";
import Guides from "../Guides/Guides";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error", err));
  }, [services]);
  return (
    <>
      <Slider />
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <Link to="/services" className="flex justify-center">
        <Button gradientMonochrome="cyan">See All</Button>
      </Link>
      <Guides />
    </>
  );
};

export default Home;
