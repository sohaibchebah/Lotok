import React, { useEffect } from "react";
import ProfileFkeList from "./ProfileFkeList";
import NavforOtherPages from "../NavforOtherPages";
import { useLocation } from "react-router-dom";
import Underline from "../Underline";
const Profile = () => {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {" "}
      <div className="container">
        <div className="mb-[150px]">{/* <NavforOtherPages/> */}</div>
        <NavforOtherPages />
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
            <h2 className="font-bold text-xl  ">{state.name}</h2>
          </div>{" "}
        </div>
        <div className="-mt-[15px] mb-[50px]">
          <Underline />
        </div>
        <h2 className=" mb-3 text-secondary-gray">{state.name}'s Vehicles</h2>

        <ProfileFkeList />
      </div>
    </div>
  );
};

export default Profile;
