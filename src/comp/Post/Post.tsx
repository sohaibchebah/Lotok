import React from "react";
import { useLocation } from "react-router-dom";
import NavforOtherPages from "../NavforOtherPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import StarRatingcomp from "../starRatingcomp";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../@/components/ui/button";
import CommentsPage from "./CommentsPage";
import { CarImages } from "./CarImages";
import { DatePickerWithRange2 } from "./DatePickWithRange";
import { Calculator } from "lucide-react";
import { DatePickerWithRange3 } from "./DatePickerWithRange3";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { DatePicker } from "./DatePicker";
import { Payement } from "./Payement";
const Post = () => {
  const { state } = useLocation();
  let i = 0;

  const widthofrating = (width: number, tot: number) => {
    return `w-${width}/${tot}`;
  };

  return (
    <div>
      <NavforOtherPages />
      <div className="mt-[140px]  container flex max-lg:flex-col max-lg:gap-4 justify-between">
        <ul className="images  text-center lg:w-[66%] xl:w-[60%]  ">
          <CarImages imageList={state.images} />
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className=" -mt-1 w-full h-11 shadow-xl shadow-light-pink mb-6 bg-primary-red text-white hover:bg-black hover:text-white"
              >
                {" "}
                BOOK
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader></DialogHeader>
              <div className="flex flex-col items-center justify-center gap-10 ">
                <div className="flex  flex-col items-center gap-4">
                  <h2 className="text-black text-sm font-semibold">
                    {" "}
                    Personal info
                  </h2>
                  <div className="flex items-center justify-between max-sm:flex-col gap-4">
                    <div className="flex  items-center gap-4 flex-col">
                      <Input
                        id="First-name"
                        placeholder="First name"
                        className="w-[150px]"
                      />
                    </div>
                    <div className="flex  items-center gap-4 flex-col">
                      <Input
                        id="Last-name"
                        placeholder="Last name"
                        className="w-[150px]"
                      />
                    </div>
                    <div className="flex  items-center gap-4 flex-col">
                      <Input
                        id="Phone-nmber"
                        placeholder=" Phone Number"
                        className="w-[150px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-black text-sm font-semibold">
                    {" "}
                    Driving Licence info
                  </h2>

                  <div className="flex   items-center gap-4 max-sm:flex-col">
                    <Input
                      id=" Driving licence's Nmber"
                      placeholder=" Driving licence's Number "
                      className="w-[200px]"
                    />
                    <div className=" w-full flex  items-center gap-4 ">
                      <DatePicker></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex  flex-col items-center gap-4">
                  <h2 className="text-black text-sm font-semibold">
                    {" "}
                    Driving Licence image
                  </h2>

                  <input
                    type="file"
                    accept="image/*"
                    className="text-secondary-gray"
                    placeholder="Driving licence's "
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-black text-sm font-semibold">
                    {" "}
                    Booking Time
                  </h2>

                  <DatePickerWithRange3></DatePickerWithRange3>
                </div>
                <div>
                  <Payement></Payement>
                </div>
                <DialogFooter>
                  <Button type="submit">BOOK</Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
          <Link
            to={"/Profile"}
            state={{ img: state.userImg, name: state.userName }}
          >
            {" "}
            <div className="   profile container flex justify-start items-center ">
              <img
                src={state.userImg}
                alt="#"
                className=" rounded-[100%] mr-6"
                width={50}
              />
              <h2 className="font-semibold ">{state.userName}</h2>
            </div>{" "}
          </Link>
        </ul>
        <ul className="details  lg:w-[28%] xl:w-[33%]">
          <li
            key={state.id}
            className="flex flex-col items-start justify-center border-solid border p-3 rounded-t-md  "
          >
            <h2 className="font-bold text-2xl mb-3">
              {state.make} {state.model}
            </h2>
            <div className="price flex justify-between items-center pr-1 w-full text-xl font-semibold pb-3 border-solid border-x-0 border-t-0 border-2 border-light-gray mb-4 ">
              <p className="text-primary-red">
                {state.pricePerDay}DZA{" "}
                <span className="text-[12px] font-thin">/Day</span>
              </p>
              <p className="text-secondary-gray">
                {state.pricePerWeek}DZA{" "}
                <span className="text-[12px] font-thin ">/Week</span>
              </p>
            </div>
            <ul className="state-info flex flex-col gap-4 justify-between w-full pr-2 text-black text-md mb-5">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faGasPump}
                  className="text-secondary-gray mr-1 text-lg"
                />{" "}
                <span>{state.energy}</span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className="text-secondary-gray mr-1 text-lg"
                />
                <span>{state.boit}</span>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-secondary-gray mr-1 text-lg"
                />{" "}
                <span>{state.city}</span>
              </li>
              {state.airConditioner && (
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faWind}
                    className="text-secondary-gray mr-1 text-lg"
                  />{" "}
                  <span>Air Conditioner</span>
                </li>
              )}
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-secondary-gray mr-1 text-lg"
                />{" "}
                <span>{state.sets}</span>
              </li>

              <li>
                {state.availability.map((item, ind) => (
                  <div key={ind} className="flex flex-col">
                    <span className="text-sm text-secondary-gray">
                      Not Available in
                    </span>
                    <DatePickerWithRange2
                      className="date"
                      startDate={item.from}
                      endDate={item.to}
                    />
                  </div>
                ))}
                <p className="text-secondary-gray mb-4 text-sm ">
                  {" "}
                  {state.textDetails}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="container mt-[50px]">
        <p className=" text-secondary-gray  mb-2">
          {state.ratingTotal} <span className="ml-2">Reviews</span>
        </p>

        <div className="flex items-center ">
          {" "}
          <div className="image  w-[200px] max-w-full flex flex-col gap-4 justify-between items-start ">
            <h2 className="font-semibold  text-5xl mb-2 ">{state.rating}</h2>

            <div className="flex items-center justify-center ">
              {Array.from({
                length:
                  Math.floor(state.rating) +
                  (state.rating - Math.floor(state.rating) > 0.75 ? 1 : 0),
              }).map((_, index) => (
                <div key={index}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="   text-primary-red"
                  />
                </div>
              ))}
              {state.rating - Math.floor(state.rating) <= 0.75 &&
              state.rating - Math.floor(state.rating) > 0.25 ? (
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  className="text-primary-red "
                />
              ) : null}
              {Array.from({
                length:
                  state.rating - Math.floor(state.rating) > 0.25
                    ? 5 - Math.ceil(state.rating)
                    : 5 - Math.floor(state.rating),
              }).map((_, index) => (
                <div key={index}>
                  {" "}
                  <StarRatingcomp />
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            {state.ratingList.map((item) => (
              <div className="image w-[200px]  gap-4  flex flex-row  justify-between items-center ">
                <div className="flex flex-row-reverse items-center ">
                  <div className="h-1 overflow-hidden">
                    <img
                      src="../../../public/images/rat.png"
                      width={(item.persons * 170) / state.ratingTotal}
                      alt="#"
                    />
                  </div>
                  <span className="text-[12px] mr-1 w-3 text-secondary-gray">
                    {" "}
                    {item.persons}
                  </span>
                </div>
                <div className="flex items-center justify-start w-[60px]">
                  {Array.from({
                    length: item.rating,
                  }).map((_, index) => (
                    <div key={index}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faStar}
                        className=" text-[10px] text-primary-red"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="comments mt-[30px] container">
          <div className="h-[2px] w-full bg-secondary-gray mb-[30px]"></div>
          <CommentsPage />
        </div>
      </div>
    </div>
  );
};

export default Post;
