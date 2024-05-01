import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import StarRatingcomp from "./starRatingcomp";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../@/components/ui/button";

interface CarDetails {
  id: number;
  make: string;
  model: string;
  images: { id: number; name: string }[];
  pricePerDay: number;
  pricePerWeek: number;
  rating: number;
  energy: string;
  boit: string;
  grise: number;
  surance: number;
  scanner: number;
  city: string;
  availability: { from: string; to: string };
  airConditioner: boolean;
}
interface CarListProps {
  carList: CarDetails[];
  showThree: boolean; 
}
const Card = ({ carList, showThree }: CarListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3  gap-4 mb-[60px] ">
        {carList.map((car, ind) =>
          ind < 3 || !showThree ? (
            <li
              key={car.id}
              className="flex flex-col items-start justify-center border-solid border p-3 rounded-t-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="image relative h-[200px] w-full max-w-full overflow-hidden mb-3">
                <div className=" absolute z-20 flex items-center justify-center top-0 right-0">
                  {Array.from({
                    length:
                      Math.floor(car.rating) +
                      (car.rating - Math.floor(car.rating) > 0.75 ? 1 : 0),
                  }).map((_, index) => (
                    <div key={index}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faStar}
                        className="   text-primary-red"
                      />
                    </div>
                  ))}
                  {car.rating - Math.floor(car.rating) <= 0.75 &&
                  car.rating - Math.floor(car.rating) > 0.25 ? (
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      className="text-primary-red "
                    />
                  ) : null}
                  {Array.from({
                    length:
                      car.rating - Math.floor(car.rating) > 0.25
                        ? 5 - Math.ceil(car.rating)
                        : 5 - Math.floor(car.rating),
                  }).map((_, index) => (
                    <div key={index}>
                      {" "}
                      <StarRatingcomp />
                    </div>
                  ))}
                </div>

                <img
                  src={car.images[0].name}
                  alt="#"
                  className="absolute w-[1000px] rounded-md"
                />
              </div>
              <h2 className="font-bold text-2xl mb-4">
                {car.make} {car.model}
              </h2>
              <div className="price flex justify-between items-center pr-1 w-full text-xl font-semibold pb-4 border-solid border-x-0 border-t-0 border-2 border-light-gray mb-4 ">
                <p className="text-primary-red">
                  {car.pricePerDay}DZA{" "}
                  <span className="text-[12px] font-thin">/Day</span>
                </p>
                <p className="text-secondary-gray">
                  {car.pricePerWeek}DZA{" "}
                  <span className="text-[12px] font-thin ">/Week</span>
                </p>
              </div>
              <ul className="car-info flex justify-between w-full pr-2 text-black text-md mb-5">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faGasPump}
                    className="text-secondary-gray mr-1 text-lg"
                  />{" "}
                  <span>{car.energy}</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faScrewdriverWrench}
                    className="text-secondary-gray mr-1 text-lg"
                  />
                  <span>{car.boit}</span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-secondary-gray mr-1 text-lg"
                  />{" "}
                  <span>{car.energy}</span>
                </li>
              </ul>
              <Button className="w-full h-11 shadow-xl shadow-light-pink mb-2 ">
                {" "}
                BOOK
              </Button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Card;
