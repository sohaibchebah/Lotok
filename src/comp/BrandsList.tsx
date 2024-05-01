import React from "react";
// import { Bm } from "../../public/images/brands/BMW.png";
// import { Fiat } from "../../public/images/brands/Fiat (1).png";
// import { Toyota } from "../../public/images/brands/Dacia.png";
// import { Tesla } from "../../public/images/brands/Tesla.png";
interface Brands {
  id: number;
  name: string;
  image: string;
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
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4 mb-[60px] ">
      {items.map((item) => (
        <li
          key={item.id}
          className="  bg-white border-light-gray border-[1.65px] border-solid hover:bg-light-pink hover:shadow-md"
        >
          <a className="h-full w-full p-10 flex justify-center items-center">
            <img src={item.image} alt={item.name} className="" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BrandsList;
