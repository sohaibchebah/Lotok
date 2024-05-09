import React from "react";
import SpecialTiltle from "./SpecialTiltle";
import CardData from "./CardData";
import { Button } from "../../@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VehiclesSection = () => {
  const history = useNavigate();
  const handleClick = () => {
    // Navigate to Component2 when the button is clicked
    history("/VehiclesPage");
  };
  return (
    <div>
      <div className="container text-center">
        <SpecialTiltle> Vehicles </SpecialTiltle>
        <CardData showOnlythree={true} />
        <Button className="px-10" onClick={handleClick}>
          {" "}
          See more
        </Button>
      </div>
    </div>
  );
};

export default VehiclesSection;
