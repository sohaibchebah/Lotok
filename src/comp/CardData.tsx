import React from "react";
import Card from "./Card";
interface Props {
  showOnlythree: boolean;
}
const CarData = ({ showOnlythree }: Props) => {
  const cars: CarListProps = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      images: [
        { id: 1, name: "../../public/images/cardimg.jpg" },
        { id: 1, name: "../../public/images/BMW M2.png" },
      ],
      pricePerDay: 5000,
      pricePerWeek: 25000,
      rating: 3.26,
      ratingTotal: 25,
      ratingList: [
        { persons: 2, rating: 1 },
        { persons: 6, rating: 2 },
        { persons: 12, rating: 3 },
        { persons: 4, rating: 4 },
        { persons: 1, rating: 5 },
      ],
      textDetails:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illum natus quis praesentium quibusdam accusantium voluptas quam sequi veritatis iusto. Ratione accusamus quasi minus quibusdam debitis! A vero perspiciatis asperiores!",

      energy: "Fuel",
      boit: "Auto",
      grise: 12345,
      surance: 54321,
      scanner: 98765,
      city: "Tissemssilt",
      availability: [
        { from: "2024-07-01", to: "2024-07-06" },
        { from: "2024-07-08", to: "2024-07-09" },
        { from: "2024-07-12", to: "2024-07-15" },
      ],
      airConditioner: true,
      userName: "Boulafghad Djawad sofiane",
      sets: 4,
      userImg: "../../public/images/djawad.jpeg",
      isAvailable: false,
    },

    

    // Add more car objects as needed
  ];

  return (
    <div>
      <Card carList={cars} showThree={showOnlythree} />
    </div>
  );
};

export default CarData;
