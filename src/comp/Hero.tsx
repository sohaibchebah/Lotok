import React from "react";
import heroImg from "../../public/images/rightloto.png";
import heroBgImg from "../../public/images/nvector.png";
const Hero = () => {
  return (
    <div className="hero xl:overflow-x-hidden h-screen max-lg:pt-[150px]">
      <div className="lg:flex-1 lg:pl-[50px] ">
        <h1 className=" hero__title">
          Rent Your{" "}
          <span className=" special-text  text-primary-red ">Favorite</span>{" "}
          Vehicle
        </h1>
        <p className="hero__subtitle ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          magni eaque, architecto, illo, maxime corporis velit repellat rem nemo
          similique tempore quae consequatur.
        </p>
      </div>
      <div className="hero__image-container ">
        <img src={heroBgImg} alt="img1" className="hero__image-overlay" />
        <div className="hero__image lg:pr-[50px]">
          <img src={heroImg} alt="img" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
