import React from 'react'
import FakeData from './FakeData';
import { Button } from '../../../@/components/ui/button';
interface CarRentalCommand {
  id: number;
  brand: string; // Brand of the car
  model: string;
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  licenseExpirationDate: Date;
  licenseImage: string; // URL or base64 representation of the image
  rentalDate: {from : Date , to : Date }
  paymentMode: string;
}
interface Props{
    List: CarRentalCommand[]; 
}
const ReservationList = ({List} : Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3  gap-4 mb-[60px] ">
      {List.map((command) => (
        <div
          key={command.id}
          className="car-rental-command flex flex-col items-center justify-center text-black bg-light-pink text-md   p-4 gap-4   hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]  "
        >
          <div
            className="flex items-center font-bold 
 justify-between gap-4 mb-2 "
          >
            {" "}
            <h2 className=" text-primary-red-100">{command.brand}</h2>
            <h2 className="text-primary-red">{command.model}</h2>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2 ">
            <p className="flex flex-col items-center justify-center gap-1 ">
              {" "}
              <span className="text-secondary-gray">First name </span>
              <span className="font-semibold">{command.firstName}</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-1 ">
              {" "}
              <span className="text-secondary-gray">Last name </span>
              <span className="font-semibold">{command.lastName}</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-1">
              <span className="text-secondary-gray mr-3">Phone number: </span>{" "}
              <span className="font-semibold">{command.phoneNumber}</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-2 ">
            {" "}
            <p className="flex flex-col items-center gap-1">
              <span className="text-secondary-gray ">License number: </span>{" "}
              <span className="font-semibold"> {command.licenseNumber}</span>{" "}
            </p>
            <p className="flex flex-col items-center gap-1">
              <span className="text-secondary-gray ">
                License Expiration Date:{" "}
              </span>{" "}
              <span className="font-semibold">
                {command.licenseExpirationDate.toDateString()}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-2 text-secondary-gray">
            <p>
              From{" "}
              <span className="text-black font-semibold">
                {command.rentalDate.from.toDateString()}
              </span>{" "}
              To{" "}
              <span className="text-black font-semibold">
                {command.rentalDate.to.toDateString()}
              </span>
            </p>
          </div>
          <p>
            {" "}
            <span className="text-secondary-gray mr-3">Payment: </span>{" "}
            {command.paymentMode}
          </p>
          <Button className="mt-3">Approve</Button>
        </div>
      ))}
    </div>
  );
}

export default ReservationList