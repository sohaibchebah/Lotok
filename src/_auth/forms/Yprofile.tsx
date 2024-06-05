import React from "react";
import axios from "axios";
import AddPost from "@/comp/AddPost.tsx/AddPost";
import NavforOtherPages from "@/comp/NavforOtherPages";
import Underline from "@/comp/Underline";
import { Navigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { } from "lucide-react";
import Reservations from "@/comp/Reservation/Reservations";
const Yprofile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const toReserve = () => {
    navigate("/Reservations");
  };

  return (
    <div className="container">
      <div className="mb-[150px]">
        <NavforOtherPages />
      </div>
      <div
        className=" container px-4 h-[210px] bg-light-gray Made-info flex justify-between items-center border-solid border-transparent pb-2 border-b-primary-red border-b-[3px] max-sm:flex-col-reverse max-sm:h-[210px] max-sm:py-10
         "
      >
        <div className="   profile container flex max-md:flex-col justify-start items-center ">
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
      <ul className="flex justify-between items-center  w-full mb-3">
        <li className="flex justify-center items-center  ">
          <AddPost />
        </li>
        <li className="flex justify-center items-center ">
          <Button
            onClick={toReserve}
            className="-mt-1 w-[100px] h-8 shadow-xl shadow-light-pink  bg-primary-red text-white hover:bg-black hover:text-white"
          >
            Reservation
          </Button>
        </li>
        <li className="flex justify-center items-center ">
          <Button className="-mt-1 w-[100px] h-8 shadow-xl shadow-light-pink  bg-primary-red text-white hover:bg-black hover:text-white">
            Warnings
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Yprofile;
