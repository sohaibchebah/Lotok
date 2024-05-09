import React from "react";
import FakeModel from "./FakeModelData";
import { useLocation } from "react-router-dom";
import NavforOtherPages from "../NavforOtherPages";
import Underline from "../Underline";

const ModelPage = () => {
  //   const location = useLocation();
  //   const queryParams = new URLSearchParams(location.search);
  //   const receivedData = queryParams.get(state);
  const { state } = useLocation();
  //do stuff with state obj

  return (
    <>
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
        <img src={state.img} alt="#" />
      </div>
      <div className="-mt-[15px]">
        <Underline />
      </div>
      <div>
        <FakeModel />
      </div>
    </>
  );
};

export default ModelPage;
