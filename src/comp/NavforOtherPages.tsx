import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Button } from "../../@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";

interface Props {
  label: string;
  url: string;
}
const NavforOtherPages = () => {
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
  const history = useNavigate();

  const handleClick = () => {
    // Navigate to Component2 when the button is clicked
    history("/");
  };
  const Navlinks: Props[] = [
    { label: "Home", url: "/" },
    { label: "Brands", url: "/Brands" },
    { label: "Vehicles", url: "/VehiclesPage" },
    { label: "About", url: "/About" },
  ];
  return (
    <header className="absolute z-50 -top-3 w-[100%] ">
      <div className="container bg-white fixed top right-1/2 translate-x-1/2  flex justify-between lg:items-center items-start min-[1170px]:w-[1100px] min-[1300px]:w-[1270px] ">
        <div className="logoImg">
          <img
            src={LogoImg}
            onClick={handleClick}
            className=" cursor-pointer object-contain h-[110px]"
            alt="#"
          />
        </div>
        <ul className=" max-lg:hidden w-fit flex xl:justify-center items-center lg:flex-row flex-col justify-around max-lg:h-[250px] max-lg max-lg:pt-5  px-0">
          {Navlinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.url}
                className=" lg:mx-2 px-4 py-4 my-4 text-black lg:text-black font-semibold max-xl:py-1 w-[100%] hover:text-primary-red-100 lg:hover:text-primary-red transition-all ease-in"
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
                        <a
                          href={item.url}
                          className=" lg:mx-2 px-4 py-4 my-4 text-black lg:text-black font-semibold max-xl:py-1 w-[100%] hover:text-primary-red-100 lg:hover:text-primary-red transition-all ease-in"
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

export default NavforOtherPages;
