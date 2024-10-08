import React from "react";
import { useEffect } from "react";
import NavforOtherPages from "../NavforOtherPages";
import SpecialTiltle from "../SpecialTiltle";
import BrandsListGrand from "./BrandsListGrand";
import FooterSection from "../FooterSection";
const BrandPage = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

  return (
    <div>
      <NavforOtherPages />
      <div className="container mt-[200px] ">
        <SpecialTiltle> Brands</SpecialTiltle>
        <BrandsListGrand />
      </div>
      <div className="bg-black">
        <FooterSection />
      </div>
    </div>
  );
};

export default BrandPage;
