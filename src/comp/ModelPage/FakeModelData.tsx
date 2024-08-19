import React from "react";
import ModelList from "./ModelList";

const FakeModel = () => {
  const cars: CarListProps = [
    {
      id: 1,
      make: "Toyota",
      model: "BMW 530e",
      main_image_url: "../../../public/images/BMW 530e.png",
    },
    {
      id: 1,
      make: "Toyota",
      model: "BMW i4 Gran Coupe",
      main_image_url: "../../../public/images/BMW i4 Gran Coupe.png",
    },
    {
      id: 1,
      make: "Toyota",
      model: "BMW M2",
      main_image_url: "../../../public/images/BMW M2.png",
    },
    {
      id: 1,
      make: "Toyota",
      model: "BMW M8",
      main_image_url: "../../../public/images/BMW M8.png",
    },

    // Add more car objects as needed
  ];

  return (
    <div>
      <ModelList carList={cars} />
    </div>
  );
};

export default FakeModel;
