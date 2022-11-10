import React, { useState } from "react";

const Guides = () => {
  const [guides, setGuides] = useState([]);
  fetch("guide.json")
    .then((res) => res.json())
    .then((data) => {
      setGuides(data);
    });
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our Superman Who Guide You
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {guides.map((guide) => (
          <div key={guide.id}>
            <img src={guide?.img} alt="" />
            <h2 className="font-bold pl-2">{guide.name}</h2>
            <p className="font-bold pl-2">Country : {guide.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
