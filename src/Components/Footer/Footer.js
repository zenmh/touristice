import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 mt-40">
      <div className="font-bold md:grid grid-cols-3">
        <div>
          <h3 className="text-3xl">Touristics</h3>
          <p className="text-xl">We Bleve on Quality</p>
        </div>
        <div>
          <h2 className="text-2xl">More About Us</h2>
          <ul>
            <li>Demo 1</li>
            <li>Demo 2</li>
            <li>Demo 3</li>
            <li>Demo 4</li>
            <li>Demo 5</li>
            <li>Demo 6</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Our Partners</h2>
          <ul>
            <li>Company 1</li>
            <li>Company 2</li>
            <li>Company 3</li>
            <li>Company 4</li>
            <li>Company 5</li>
            <li>Company 6</li>
          </ul>
        </div>
        <p className="font-light flex justify-center">
          <small className="flex items-center">
            <AiFillCopyrightCircle />{" "}
            <span className="pl-2">all rights reserved</span>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
