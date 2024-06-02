import React from "react";
import ProfileFkeList from "../Profile/ProfileFkeList";
import NavforOtherPages from "../NavforOtherPages";
import { useLocation } from "react-router-dom";
import Underline from "../Underline";
import { useState } from "react";
const UserProfile = () => {
  const { state } = useLocation();
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {" "}
      <div className="container">
        <div className="mb-[150px]">{/* <NavforOtherPages/> */}</div>
        <NavforOtherPages />
        <div
          className=" container px-4 h-[210px] bg-light-gray Made-info flex justify-between items-center border-solid border-transparent pb-2 border-b-primary-red border-b-[3px] max-sm:flex-col-reverse max-sm:h-[282px] max-sm:py-10
         "
        >
          <div>
            <h2>Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && (
              <div>
                <img
                  src={image.toString()}
                  alt="Uploaded"
                                  className="rounded-[100%] aspect-square"
                                  width={50}
                                  height={50}
                />
              </div>
            )}
          </div>
          <h2 className="font-bold text-xl  "></h2>
        </div>{" "}
      </div>
      <div className="-mt-[15px] mb-[50px]">
        <Underline />
      </div>
      <h2 className=" mb-3 text-secondary-gray">'s Vehicles</h2>
      <ProfileFkeList />
    </div>
  );
};

export default UserProfile;
