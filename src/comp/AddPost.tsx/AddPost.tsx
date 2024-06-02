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
import { DatePickerWithRange2 } from "./DatePickWithRange";
import { Calculator } from "lucide-react";
import { DatePickerWithRange3 } from "./DatePickerWithRange3";
import { Link } from "react-router-dom";
import { AirConditioner } from "./AirConditioner";
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
import axios from "axios";
import { useQuery } from "react-query";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form";
import { Navigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { StringValidation, z } from "zod";
import { useForm } from "react-hook-form";
import {
  SignupValidation,
  postValidation,
  AddPostValidation,
} from "../../../@/lib/validation/index";
import { Location } from "react-router-dom";
import { useCreateUserAccount } from "/lib/react-query/queriesAndmutations.ts";
import { City } from "./City";
import { CarImages } from "./CarImages";
import { useState } from "react";
const AddPost = () => {
  const { state } = useLocation();
  const [datadate, setData] = useState<Date | undefined>(undefined);
  const [datastring, setDataString] = useState<string>("");
  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);
  const [diff, setdiff] = useState<number>(0);
  const [payment, setPayment] = useState<string>("");

  const handleDataChange = (newData: Date) => {
    setData(newData);
    setDataString(newData.toLocaleDateString());
    console.log(newData);
  };
  const changeRange = (from: Date) => {
    setFrom(from);
    console.log("form" + from);
  };
  const changeRangeto = (to: Date) => {
    setTo(to);
    console.log("to" + to);
  };
  const calculateDaysDifference = (start: Date, end: Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInTime = end.getTime() - start.getTime();
    setdiff(Math.round(diffInTime / oneDay));
  };
  const handleSelect = (item: string) => {
    setPayment(item);
    console.log(item);
  };
  // const daysDifference = calculateDaysDifference(from, to);

  // const example = (date: Date) => {
  //   console.log(Date);
  // };
  interface Images {
    id: number;
    name: string;
  }
  const [items, setItems] = useState<Images[]>([]);

  //  const addItem = (newItem: Images) => {

  //  };
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        setItems([...items, { id: 0, name: reader.result as string }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const [imageSrc1, setImageSrc1] = useState<string | null>(null);

  const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc1(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const form = useForm<z.infer<typeof AddPostValidation>>({
    resolver: zodResolver(AddPostValidation),
    defaultValues: {
      PricePerDay: "",
      PricePerWeek: "",
      Number: "",
      carte_grise: "",
      la_surance: "",
      Scanner: "",
      City: "",
      date_from: "",
      date_to: "",
      Air_conditioner: "",
    },
  });
  async function Booking(field: any) {
    console.log(field);
  }
  return (
    <div>
      <NavforOtherPages />
      <div className="mt-[140px]  container flex max-lg:flex-col max-lg:gap-4 justify-between">
        <ul className="images  text-center lg:w-[66%] xl:w-[60%]">
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
            <DialogContent className="">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(Booking)}>
                  <div className="flex max-lg:flex-col justify-between items-center">
                    <div className="carimages text-center flex flex-col  max-w-[50%] pl-8">
                      <h2 className="text-black text-sm font-semibold mb-1">
                        {" "}
                        Add Your Car's Images
                      </h2>
                      <FormField
                        control={form.control}
                        name="Scanner"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <input
                                type="file"
                                accept="image/*"
                                className="text-secondary-gray"
                                placeholder="Scanner"
                                onChange={handleFileChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div>
                        <CarImages imageList={items} />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <div className="flex  flex-col items-center gap-2">
                        <h2 className="text-black text-sm font-semibold">
                          {" "}
                          Price
                        </h2>
                        <div className="flex items-center justify-between  gap-2">
                          <div className="flex  items-center gap-2 flex-col">
                            <FormField
                              control={form.control}
                              name="PricePerDay"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      id="PricePerDay"
                                      placeholder="Price Per Day"
                                      className="w-[150px]"
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex  items-center gap-3 flex-col">
                            <FormField
                              control={form.control}
                              name="PricePerWeek"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      id="PricePerWeek"
                                      placeholder="Price Per Week"
                                      className="w-[150px]"
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex  items-center gap-2 flex-col"></div>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-black text-sm font-semibold mb-2 text-center">
                          {" "}
                          Car Number
                        </h2>
                        <FormField
                          control={form.control}
                          name="Number"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  id="Number"
                                  placeholder=" car Number"
                                  className="w-[180px]"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="mx-auto flex  flex-col items-center gap-2">
                          <h2 className="text-black text-sm font-semibold">
                            {" "}
                            Gray Card
                          </h2>
                          <FormField
                            control={form.control}
                            name="carte_grise"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="text-secondary-gray"
                                    placeholder="carte_grise "
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <h2 className="text-black text-sm font-semibold">
                            {" "}
                            Esurance
                          </h2>
                          <FormField
                            control={form.control}
                            name="la_surance"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="text-secondary-gray"
                                    placeholder="la_surance "
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <h2 className="text-black text-sm font-semibold">
                            {" "}
                            Scanner
                          </h2>
                          <FormField
                            control={form.control}
                            name="Scanner"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="text-secondary-gray"
                                    placeholder="Scanner "
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-center mb-1">
                        <h2 className="text-black text-sm font-semibold">
                          {" "}
                          Not Available In
                        </h2>

                        <FormField
                          control={form.control}
                          name="date_from"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <DatePickerWithRange3
                                  rangefrom={changeRange}
                                  rangeto={changeRangeto}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="mb-">
                        <City onPaymentChange={handleSelect}> </City>
                      </div>
                      <div className="mb-4">
                        <AirConditioner onPaymentChange={handleSelect}>
                          {" "}
                        </AirConditioner>
                      </div>

                      <DialogFooter>
                        <Button className="w-[250px]" type="submit">
                          Post
                        </Button>
                      </DialogFooter>
                    </div>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          {/* <Link
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
          </Link> */}
        </ul>
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(Booking)}>
            <div className="flex flex-col items-center justify-center gap-10 ">
              <div className="flex  flex-col items-center gap-4">
                <h2 className="text-black text-sm font-semibold">
                  {" "}
                  Personal info
                </h2>
                <div className="flex items-center justify-between max-sm:flex-col gap-4">
                  <div className="flex  items-center gap-4 flex-col">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="First-name"
                              placeholder="First name"
                              className="w-[150px]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex  items-center gap-4 flex-col">
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="Last-name"
                              placeholder="Last name"
                              className="w-[150px]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex  items-center gap-4 flex-col">
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="Phone-nmber"
                              placeholder=" Phone Number"
                              className="w-[150px]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
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
                  <FormField
                    control={form.control}
                    name="driving_license"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            onClick={calculateDaysDifference(from, to)}
                            id=" Driving licence's Nmber"
                            placeholder=" Driving licence's Number "
                            className="w-[200px]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className=" w-full flex  items-center gap-4 ">
                    <FormField
                      control={form.control}
                      name="expiration_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <DatePicker onDataChange={handleDataChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="mx-auto flex  flex-col items-center gap-4">
                <h2 className="text-black text-sm font-semibold">
                  {" "}
                  Driving Licence image
                </h2>
                <FormField
                  control={form.control}
                  name="driving_license"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          type="file"
                          accept="image/*"
                          className="text-secondary-gray"
                          placeholder="Driving licence's "
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-black text-sm font-semibold">
                  {" "}
                  Booking Time
                </h2>

                <FormField
                  control={form.control}
                  name="expiration_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DatePickerWithRange3
                          rangefrom={changeRange}
                          rangeto={changeRangeto}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                {" "}
                The Price :{" "}
                {Math.floor(diff / 7) * state.pricePerWeek +
                  (diff % 7) * state.pricePerDay}{" "}
                {" DZA"}
              </div>
              <div>
                <Payement onPaymentChange={handleSelect}> </Payement>
              </div>
              <DialogFooter>
                <Button type="submit">BOOK</Button>
              </DialogFooter>
            </div>
          </form>
        </Form> */}
      </div>
    </div>
  );
};

export default AddPost;
