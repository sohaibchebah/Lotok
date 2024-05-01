import React from "react";
import Card from "./Card";

const CarData = () => {
  const cars: CarListProps = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [{ id: 1, name: "../../public/images/cardimg.jpg" }],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: { from: "2024-05-01", to: "2024-05-07" },
      airConditioner: true,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [{ id: 1, name: "../../public/images/cardimg.jpg" }],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 1,
      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: { from: "2024-05-01", to: "2024-05-07" },
      airConditioner: true,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [{ id: 1, name: "../../public/images/cardimg.jpg" }],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: { from: "2024-05-01", to: "2024-05-07" },
      airConditioner: true,
    },
    // Add more car objects as needed
  ];

  return (
    <div>
      <Card carList={cars} />
    </div>
  );
};

export default CarData;
