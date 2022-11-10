import React, { useState } from "react";

const Specialities = () => {
  const [specialities, setSpecialities] = useState([]);
  fetch("specialities.json")
    .then((res) => res.json())
    .then((data) => {
      setSpecialities(data);
    })
    .catch((err) => console.error("Error", err));
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-4 gap-8">
        {specialities.map((sp) => (
          <div key={sp.id}>
            <img src={sp.img} alt="" />
            <h2 className="font-bold text-center text-teal-400">{sp.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
