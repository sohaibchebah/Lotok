import React from "react";
import { Button } from "../../../@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface CarDetails {
  id: number;
  make: string;
  model: string;
  main_image_url: string;
}
interface CarListProps {
  carList: CarDetails[];
}
const ModelList = ({ carList }: CarListProps) => {
    const history = useNavigate();
    const handleClick = () => {
      // Navigate to Component2 when the button is clicked
      history("/VehiceBySearchPage");
    };
  return (
    <div>
      <ul className="flex flex-col justify-center gap-6 mt-[100px] mb-[100px] items-center container   ">
        {carList.map((item) => (
          <li className=" px-4 py-4 bg-light-gray-100 w-full flex justify-between items-center max-md:flex-col max-md:gap-12 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="flex justify-center items-center gap-0  md:gap-10 max-md:flex-col">
              <img
                src={item.main_image_url}
                className="max-h-[160px]"
                alt="model"
              />
              <h2 className="font-bold  text-2xl"> {item.model}</h2>
            </div>
            <Link
              to={"/VehiclesByBrands"}
              state={{
                id: item.id,
                name: item.model,
                image: item.main_image_url,
              }}
            >
              <Button className="w-[100px] shadow-xl shadow-light-pink">
                {" "}
                BOOK
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
