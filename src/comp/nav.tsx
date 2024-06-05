import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import LogoImg from "../../public/images/logo.png";

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
  }, []);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Navlinks = [
    { label: "Home", id: "home" },
    { label: "Brands", id: "brands" },
    { label: "Vehicles", id: "vehicles" },
    { label: "About", id: "about" },
    
  ];

  return (
    <header className="absolute z-50 -top-3 w-[100%]">
      <div className="max-lg:bg-white container max-lg:fixed top-0 max-lg:right-1/2 max-lg:translate-x-1/2 flex justify-between lg:items-center items-start min-[1170px]:w-[1100px] min-[1300px]:w-[1270px]">
        <div className="logoImg">
          <img
            src={LogoImg}
            className="cursor-pointer object-contain h-[150px]"
            alt="#"
          />
        </div>

        <div className="max-lg:pt-14 list flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleList}
            className="lg:hidden self-center h-8 text-black"
          />

          {isListOpen && (
            <ul className="w-[100%] flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5 max-lg:bg-primary-red-100 px-0">
              {Navlinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="lg:mx-2 px-4 py-4 my-4 text-white font-semibold max-xl:py-1 w-[100%] max-lg:hover:bg-black lg:hover:text-black transition-all ease-in"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <Button className="ml-2 px-4 py-2 rounded-lg bg-black text-white">
                <a href="/Login">Log In</a>
              </Button>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
