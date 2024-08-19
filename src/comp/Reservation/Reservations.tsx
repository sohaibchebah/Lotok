import React, { useEffect } from "react";
import NavforOtherPages from "../NavforOtherPages";
import SpecialTiltle from "../SpecialTiltle";
import FooterSection from "../FooterSection";
import FakeData from "./FakeData";
const Reservations = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
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
