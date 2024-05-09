import React from "react";
import SpecialTiltle from "./SpecialTiltle";
import BlueCar from "../../public/images/BmwPic.png";
import vect from "../../public/images/Vector Line.png";
import { Button } from "../../@/components/ui/button";
const AboutSetction = () => {
  return (
    <div className="container">
      <SpecialTiltle> About Us</SpecialTiltle>
      <div className="content flex justify-between  ">
        <div className="image-cont relative max-w-[45%] max-lg:hidden mt-20">
          <img src={BlueCar} alt="img" />
          <img
            src={vect}
            alt="img"
            className="absolute -top-[140px] right-3  "
          />
        </div>
        <div className="text-cont  lg:max-w-[38%] max-lg:flex flex-col justify-center items-center mt-5">
          <h2 className=" max-lg:text-center lg:-ml-10 text-primary-red mb-4 font-semibold text-3xl lg:pl-10 border-solid border-transparent border  lg:border-l-primary-red-100">
            {" "}
            Beyond Rentals, Building Memories
          </h2>
          <p className="mb-5 max-lg:text-center">
            {" "}
            We are more than just a car rental service. We strive to be your
            travel companion, providing recommendations, tips, and local
            insights to help you create unforgettable memories. Count on us to
            make your journey not only comfortable but also enriching and
            unforgettable.{" "}
          </p>
          <Button> Rent Vehicle Now</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSetction;
