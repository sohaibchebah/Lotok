import React from "react";
import SpecialTiltle from "./SpecialTiltle";
import BrandsList from "./BrandsList";
import ButtonOfSect from "./ButtonOfSect";

const BrandsSection = () => {
  return (
    <div>
      <div className="container py-[100px] ">
        <SpecialTiltle> Brands </SpecialTiltle>
        <BrandsList />
        <ButtonOfSect> See more</ButtonOfSect>
      </div>
    </div>
  );
};

export default BrandsSection;
