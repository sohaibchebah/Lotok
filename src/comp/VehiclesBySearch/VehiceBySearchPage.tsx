import React from "react";
import NavforOtherPages from "../NavforOtherPages";
import SpecialTiltle from "../SpecialTiltle";
import FooterSection from "../FooterSection";
import FakeDataBySearch from "../VehiclesBySearch/FakeDataBySearch";

const VehiceBySearchPage = () => {
  return (
    <div>
      <NavforOtherPages />
      <div className="container mt-[200px] ">
        <SpecialTiltle> Vehicles</SpecialTiltle>
        <FakeDataBySearch />
      </div>
      <div className="bg-black">
        <FooterSection />
      </div>
    </div>
  );
};

export default VehiceBySearchPage;
