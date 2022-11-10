import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  const services = useLoaderData();
  useTitle("Services");

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
