import React from "react";
import { useState } from "react";
import ModelPage from "./ModelPage/ModelPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Bm } from "../../public/images/brands/BMW.png";
// import { Fiat } from "../../public/images/brands/Fiat (1).png";
// import { Toyota } from "../../public/images/brands/Dacia.png";
// import { Tesla } from "../../public/images/brands/Tesla.png";
interface Brands {
  id: number;
  name: string;
  image: string;
}
interface Models {
  id: number;
  make: string;
  model: string;
  main_image_url: string;
}

const items: Brands[] = [
  {
    id: 1,
    name: "BMW",
    image: "../../public/images/brands/BMW.png",
  },
  {
    id: 2,
    name: "Fiat",
    image: "../../public/images/brands/Fiat (1).png",
  },
  {
    id: 3,
    name: "Dacia",
    image: "../../public/images/brands/Dacia.png",
  },
  {
    id: 3,
    name: "Tesla",
    image: "../../public/images/brands/Tesla.png",
  },
];

const BrandsList = () => {
  const [models, setModels] = useState<Models[]>([]);

  async function getCars(name: any) {
    try {
      const response = await axios.get(
        "http://192.168.4.20:8000/api/listings/",
        {
          headers: { "Content-Type": "application/json" },
          params: { make: name },
        }
      );
      console.log(response.data);
      setModels(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4 mb-[60px] ">
      {items.map((item) => (
        <li
          onClick={() => getCars(item.name)}
          key={item.id}
          className="  bg-white border-light-gray border-[1.65px] border-solid hover:bg-light-pink hover:shadow-md"
        >
          <Link
            to={"/Models"}
            state={{
              id: item.id,
              name: item.name,
              img: item.image,
              Models: models,
            }}
          >
            <a className="h-full w-full p-10 flex justify-center items-center">
              <img src={item.image} alt={item.name} className="" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BrandsList;
