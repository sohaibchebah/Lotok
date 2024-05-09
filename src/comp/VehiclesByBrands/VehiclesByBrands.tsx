import React from "react";
import NavforOtherPages from "../NavforOtherPages";
import FooterSection from "../FooterSection";
import { useLocation } from "react-router-dom";
import Underline from "../Underline";

import FakeDataByBrands from "./FakeDataByBrands";
const VehiclesByBrands = () => {
  const { state } = useLocation();
  return (
    <div>
      <div className="mb-[200px]">{/* <NavforOtherPages/> */}</div>
      <NavforOtherPages />
      <div
        className=" container px-4 h-[210px] bg-light-gray Made-info flex justify-between items-center border-solid border-transparent pb-2 border-b-primary-red border-b-[3px] max-sm:flex-col-reverse max-sm:h-[282px] max-sm:py-10
         "
      >
        <h2 className=" text-black font-bold text-4xl border-solid border-transparent pb-2 border-b-primary-red ">
          {" "}
          {state.name}{" "}
        </h2>
        <img src={state.image} className="max-h-[183px]" alt="#" />
      </div>
      <div className="-mt-[15px]">
        <Underline />
      </div>

      <div className="container mt-[200px] ">
        <FakeDataByBrands />
      </div>
      <div className="bg-black">
        <FooterSection />
      </div>
    </div>
  );
};

export default VehiclesByBrands;
