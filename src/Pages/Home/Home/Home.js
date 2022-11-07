import React, { useEffect, useState } from "react";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import Slider from "../../../Components/Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error", err));
  }, [services]);
  return (
    <>
      <Slider />
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Home;
