import React from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import VehicleTypes from "./VehicleTypes";
import { City } from "./City";
import { Year } from "./Year";
import { Energy } from "./Energy";
import { Button } from "../../@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Searching = () => {
  const history = useNavigate();
  const handleClick = () => {
    // Navigate to Component2 when the button is clicked
    history("/VehiceBySearchPage");
  };
  return (
    <div>
      <div
        style={{ backgroundImage: "url('')" }}
        className=" container bg-primary-red-100 h-fit py-6 mt-0 md:mt-24 lg:h-[140px] lg:-mt-[145px] xl:h-[145px] xl:-mt-[150px] px-12  relative "
      >
        <VehicleTypes />

        <div className="form   my-auto h-[100%] max-lg:mt-8 flex flex-col justify-end gap-6   lg:flex-row  lg:justify-around mx-auto xl:w-[85%] w-[100%] items-center ">
          <DatePickerWithRange />
          <City />
          <Year />
          <Energy />
          <Button onClick={handleClick} className="bg-black max-lg:w-[250px]">
            {" "}
            Search{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searching;
