import React from "react";
import WhiteLogo from "../../public/images/Logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <div className="container flex gap-12 max-md:flex-col justify-between items-center">
      <div className="first w-full sm:w-[60%] md:max-w-[35%]  flex flex-col items-center max-md:text-center  md:items-start justify-center ">
        <img src={WhiteLogo} alt="" className="h-[150px] -mb-3" />
        <p className=" mb-3 text-white font-thin text-sm pb-5 border-solid border-transparent border-b-white border-1  ">
          more than just a car rental service. We strive to be your travel
          companion, providing recommendations, tips, and local insights to help
          you create unforgettable memories.
        </p>
        <p className=" mb-4 text-white font-normal text-[10px] ">
          @ 2024 All Rights Reserved
        </p>
      </div>
      <div className="second flex flex-col items-center max-md:text-center md:items-start">
        <h2 className=" mb-5 font-semibold text-lg text-white ">Follow us </h2>
        <ul className="brandss flex flex-row gap-4 mb-8">
          <li>
            <a href="https://web.facebook.com/profile.php?id=100012635053612&locale=fr_FR">
              <FontAwesomeIcon icon={faFacebook} className="text-white h-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} className="text-white h-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="text-white h-6" />
            </a>
          </li>
        </ul>
        <h2 className=" mb-3 font-semibold text-lg text-white ">Call us </h2>
        <p className=" text-white font-thin text-sm pb-5 "> +213 795112344 </p>
      </div>
      <div className="third mb-5 flex flex-col items-start md:items-center max-md:text-center ">
        <h2 className=" mb-5 font-semibold text-lg text-white ">Product </h2>
        <ul>
          <li className=" text-white font-thin text-sm pb-5 "> Cars</li>
          <li className=" text-white font-thin text-sm pb-5 "> Motorbikes</li>
          <li className=" text-white font-thin text-sm pb-5 "> Trucks</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
