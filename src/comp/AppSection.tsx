import React from "react";
import Appmobile from "../../public/images/Appmobile.png";
import Play from "../../public/images/Play Store PNG.png"

const AppSection = () => {
  return (
    <div className="container rounded-[20px] xl:h-[300px] lg:h-[360px] h-[300px] bg-primary-red relative max-lg:px-4 max-lg:py-4">
      <img
        src={Appmobile}
        alt="#"
        className="absolute right-20 top-1/2 -translate-y-1/2 h-[400px] skew-x-3 skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[30px] max-lg:hidden"
      />
      <div className="text-cont top-1/2 -translate-y-1/2 lg:left-20 absolute lg:max-w-[30%] mt-4 xl:max-w-[50%] max-lg:flex flex-col items-center max-lg:text-center ">
        <h2 className="text-white font-semibold text-4xl leading-relaxed	">
          {" "}
          Dowload Our App And Book Your First Vehicle
        </h2>
        <img src={Play} alt="" className=" cursor-pointer -ml-8 " />
      </div>
    </div>
  );
};

export default AppSection;
