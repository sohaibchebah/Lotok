import React from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import VehicleTypes from "./VehicleTypes";
const Searching = () => {
  return (
    <div>
      <div className="container bg-primary-red-100 h-[145px] -mt-[150px] px-12 ">
       
        <VehicleTypes  />
        <DatePickerWithRange  />
      </div>
    </div>
  );
};

export default Searching;
