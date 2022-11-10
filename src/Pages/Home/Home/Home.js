import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import Slider from "../../../Components/Slider/Slider";
import useTitle from "../../../hooks/useTitle";
import Guides from "../Guides/Guides";
import Specialities from "../Specialities/Specialities";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("https://touristics-server.vercel.app/services")
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
      <Specialities />
    </>
  );
};

export default Home;
