import { Carousel } from "flowbite-react";
import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-4">
      <Carousel slideInterval={5000}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </Carousel>
    </div>
  );
};

export default Slider;
