import React, { ReactNode } from "react";
import { Button } from "../../@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface Btn {
    children: ReactNode; 
}

const ButtonOfSect = ( {children} : Btn) => {
   const history = useNavigate();

  const handleClick = () => {
    // Navigate to Component2 when the button is clicked
    history("/Brands");
  };

  return (
    <div className="flex justify-center w-full">
      <Button
        onClick={handleClick}
        className="w-fit px-10 shadow-xl shadow-light-pink mb-2 "
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonOfSect;
