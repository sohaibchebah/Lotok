import React, { useState } from "react";
import { DatePickerWithRange } from "./DatePickerWithRange";
import VehicleTypes from "./VehicleTypes";
import { City } from "./City";
import { Year } from "./Year";
import { Energy } from "./Energy";
import { Button } from "../../@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Searching = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/VehiceBySearchPage");
  };

  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);

  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);

  const changeRange = (from: Date) => {
    setFrom(from);
    console.log("Selected From Date:", from);
  };

  const changeRangeto = (to: Date) => {
    setTo(to);
    console.log("Selected To Date:", to);
  };

  const handleVehicleTypeChange = (type: string) => {
    setSelectedVehicleType(type);
    console.log("Selected Vehicle Type:", type);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    console.log("Selected City:", city);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    console.log("Selected Year:", year);
  };

  const handleEnergyChange = (energy: string) => {
    setSelectedEnergy(energy);
    console.log("Selected Energy:", energy);
  };

  return (
    <div>
      <div
        style={{ backgroundImage: "url('')" }}
        className="container bg-primary-red-100 h-fit py-6 mt-0 md:mt-24 lg:h-[140px] lg:-mt-[145px] xl:h-[145px] xl:-mt-[150px] px-12 relative"
      >
        <VehicleTypes onVehicleTypeChange={handleVehicleTypeChange} />
        <div className="form my-auto h-[100%] max-lg:mt-8 flex flex-col justify-end gap-6 lg:flex-row lg:justify-around mx-auto xl:w-[85%] w-[100%] items-center">
          <DatePickerWithRange
            rangefrom={changeRange}
            rangeto={changeRangeto}
          />
          <City onCityChange={handleCityChange} />
          <Year onYearChange={handleYearChange} />
          <Energy onEnergyChange={handleEnergyChange} />
          <Button onClick={handleClick} className="bg-black max-lg:w-[250px]">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searching;
