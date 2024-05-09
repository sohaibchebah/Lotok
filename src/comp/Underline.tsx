import React from "react";
import Wheel from "../../public/images/red_brushed_rims-removebg-preview.png";

const Underline = ( ) => {
    return (
        <div className="container flex justify-center items-center">
        <div className="relative h-[30px] w-[200px] -mt-1 ">
          <div className="line w-full h-[3px] bg-primary-red absolute z-10  right-1/2 translate-y-1/2 top-1/2 translate-x-1/2   "></div>
          <div className="bg-transparent absolute z-20  right-1/2 translate-x-1/2 ">
            <img height={30} width={30} src={Wheel} alt="#" className="  " />
          </div>
        </div>
      </div>
    );
};

export default Underline;
