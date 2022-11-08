import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
