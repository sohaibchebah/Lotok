import React from "react";
import axios from "axios";
import AddPost from "@/comp/AddPost.tsx/AddPost";
import NavforOtherPages from "@/comp/NavforOtherPages";
import Underline from "@/comp/Underline";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Yprofile = () => {
  const { state } = useLocation();

  return (
    <div className="container">
      <div className="mb-[150px]">
        <NavforOtherPages />
      </div>
      <div
        className=" container px-4 h-[210px] bg-light-gray Made-info flex justify-between items-center border-solid border-transparent pb-2 border-b-primary-red border-b-[3px] max-sm:flex-col-reverse max-sm:h-[282px] max-sm:py-10
         "
      >
        <div className="   profile container flex justify-start items-center ">
          <img
            src={state.img}
            alt="#"
            className=" rounded-[100%] mr-6"
            width={80}
          />
          <h2 className="font-bold text-xl  ">
            {state.firstName} {state.lastName}
          </h2>
        </div>{" "}
      </div>
      <div className="-mt-[15px] mb-[20px]">
        <Underline />
      </div>
      <ul className="flex justify-center items-center gap-4 w-full">
        <li className="flex justify-center items-center ">
          <AddPost />
        </li>
      </ul>
      <h2 className=" mb-3 text-secondary-gray">Your Vehicles</h2>
    </div>
  );
};

export default Yprofile;
