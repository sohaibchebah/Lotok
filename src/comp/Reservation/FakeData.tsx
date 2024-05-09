import React from "react";
import ReservationList from "./ReservationList";
const FakeData = () => {
  const fakeCarRentalCommands: CarRentalCommand[] = [
    {
      id: 1,
      brand: "Tesla",
      model: "Model S",
      userId: 123,
      firstName: "yacine",
      lastName: "djaaraoui",
      phoneNumber: "+11234567890",
      licenseNumber: "ABCD1234",
      licenseExpirationDate: new Date("2025-12-31"),
      licenseImage: "https://example.com/license-image.jpg",
      rentalDate: {
        from: new Date("2024-05-10"),
        to: new Date("2024-05-17"),
      },
      paymentMode: "online",
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Camry",
      userId: 456,
      firstName: "chebah ",
      lastName: "sohiab",
      phoneNumber: "+19876543210",
      licenseNumber: "WXYZ5678",
      licenseExpirationDate: new Date("2026-06-30"),
      licenseImage: "https://example.com/license-image.jpg",
      rentalDate: {
        from: new Date("2024-06-01"),
        to: new Date("2024-06-10"),
      },
      paymentMode: "cash_on_delivery",
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Camry",
      userId: 456,
      firstName: "chebah ",
      lastName: "sohiab",
      phoneNumber: "+19876543210",
      licenseNumber: "WXYZ5678",
      licenseExpirationDate: new Date("2026-06-30"),
      licenseImage: "https://example.com/license-image.jpg",
      rentalDate: {
        from: new Date("2024-06-01"),
        to: new Date("2024-06-10"),
      },
      paymentMode: "cash_on_delivery",
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Camry",
      userId: 456,
      firstName: "chebah ",
      lastName: "sohiab",
      phoneNumber: "+19876543210",
      licenseNumber: "WXYZ5678",
      licenseExpirationDate: new Date("2026-06-30"),
      licenseImage: "https://example.com/license-image.jpg",
      rentalDate: {
        from: new Date("2024-06-01"),
        to: new Date("2024-06-10"),
      },
      paymentMode: "cash_on_delivery",
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Camry",
      userId: 456,
      firstName: "chebah ",
      lastName: "sohiab",
      phoneNumber: "+19876543210",
      licenseNumber: "WXYZ5678",
      licenseExpirationDate: new Date("2026-06-30"),
      licenseImage: "https://example.com/license-image.jpg",
      rentalDate: {
        from: new Date("2024-06-01"),
        to: new Date("2024-06-10"),
      },
      paymentMode: "cash_on_delivery",
    },
  ];
  return <ReservationList List={fakeCarRentalCommands} />;
};

export default FakeData;
