import React from 'react'
import NavforOtherPages from "../NavforOtherPages";
import SpecialTiltle from "../SpecialTiltle";
import FooterSection from "../FooterSection";
import CarData from '../CardData';
import { useEffect } from 'react';
const Vehiclespage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <NavforOtherPages />
      <div className="container mt-[200px] ">
              <SpecialTiltle> Vehicles</SpecialTiltle>
              <CarData showOnlythree={false} />
      </div>
      <div className="bg-black">
        <FooterSection />
      </div>
    </div>
  );
}

export default Vehiclespage