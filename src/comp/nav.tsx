import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import LogoImg from "../../public/images/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";

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
    <header className="absolute z-50 -top-3 w-[100%] ">
      <div className="container bg-white lg:bg-transparent fixed top right-1/2 translate-x-1/2  flex justify-between lg:items-center items-start min-[1170px]:w-[1100px] min-[1300px]:w-[1270px] ">
        <div className="logoImg">
          <img
            src={LogoImg}
            className=" cursor-pointer object-contain h-[110px]"
            alt="#"
          />
        </div>
        <ul className=" max-lg:hidden w-fit flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5  px-0">
          {Navlinks.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.id)}
                className=" lg:mx-2 px-4 py-4 my-4 text-white lg:text-white font-semibold max-xl:py-1 w-[100%] hover:text-black lg:hover:text-black transition-all ease-in"
              >
                {item.label}
              </button>
            </li>
          ))}
          <Button className=" ml-2 px-4 py-2 rounded-lg bg-black text-white ">
            {" "}
            <Link to={"/Login"}>Log In</Link>
          </Button>
        </ul>
        <div className="max-lg:pt-10 list flex flex-col justify-center items-center lg:hidden">
          <Sheet>
            <SheetTrigger>
              <FontAwesomeIcon
                icon={faBars}
                className="lg:hidden self-center h-6 rounded-full w-6 p-[2px] text-primary-color hover:bg-secondary-color"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className=" w-[100%] flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5  px-0">
                    {Navlinks.map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className=" lg:mx-2 px-4 py-4 my-4 text-black lg:text-black font-semibold max-xl:py-1 w-[100%] hover:text-primary-red-100 lg:hover:text-primary-red transition-all ease-in"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                    <Button className=" ml-2 px-4 py-2 rounded-lg bg-black text-white ">
                      {" "}
                      <Link to={"/Login"}>Log In</Link>
                    </Button>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* {isListOpen && (
            <ul className=" w-[100%] flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5  max-lg:bg-primary-red-100 px-0">
              {Navlinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    className=" lg:mx-2 px-4 py-4 my-4 text-white lg:text-black font-semibold max-xl:py-1 w-[100%] max-lg:hover:bg-black lg:hover:text-primary-red transition-all ease-in"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <Button className=" ml-2 px-4 py-2 rounded-lg bg-black text-white ">
                {" "}
                <Link to={"/Login"}>Log In</Link>
              </Button>
            </ul>
          )} */}
      </div>
    </header>
  );
};

export default Nav;
