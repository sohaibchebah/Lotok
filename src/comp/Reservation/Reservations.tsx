import React from "react";
import NavforOtherPages from "../NavforOtherPages";
import SpecialTiltle from "../SpecialTiltle";
import FooterSection from "../FooterSection";
import FakeData from "./FakeData";
const Reservations = () => {
  return (
      <div>
      <NavforOtherPages />
      <div className="container mt-[200px] ">
        <SpecialTiltle> Reservations</SpecialTiltle>
        <FakeData/> 
      </div>
      <div className="bg-black">
        <FooterSection />
      </div>
    </div>
  );
};

export default Reservations;
