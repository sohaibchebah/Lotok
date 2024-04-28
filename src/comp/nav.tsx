import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import LogoImg from "../../public/images/logo.png";
interface Props {
  label: string;
  url: string;
}
const Nav = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Check if window width is higher than 1200px
      setIsListOpen(window.innerWidth > 1024);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  const Navlinks: Props[] = [
    { label: "Home", url: "./home.tsx" },
    { label: "Brands", url: "./Brands.tsx" },
    { label: "Vehicles", url: "./Vehicles.tsx" },
    { label: "About", url: "./About.tsx" },
  ];
  return (
    <header className="absolute z-50 top-0 w-[100%] ">
      <div className="container flex justify-between lg:items-center items-start min-[1170px]:w-[1100px] min-[1300px]:w-[1270px] ">
        <div className="logoImg">
          <img src={LogoImg} className="object-contain h-[150px]" alt="#" />
        </div>

        <div className=" max-lg:pt-14  list flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleList}
            className="lg:hidden self-center h-8 text-black "
          />

          {isListOpen && (
            <ul className=" w-[100%] flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5  max-lg:bg-primary-red-100 px-0">
              {Navlinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    className=" lg:mx-2 px-4 py-4 my-4 text-white font-semibold max-xl:py-1 w-[100%] max-lg:hover:bg-black lg:hover:text-black transition-all ease-in"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <button className=" ml-2 px-4 py-2 rounded-lg bg-black text-white ">
                {" "}
                Log In
              </button>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
