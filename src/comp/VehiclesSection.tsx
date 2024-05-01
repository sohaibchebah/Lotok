import React from "react";
import SpecialTiltle from "./SpecialTiltle";
import CardData from "./CardData";
import { Button } from "../../@/components/ui/button";

const VehiclesSection = () => {
  return (
    <div>
      <div className="container text-center">
        <SpecialTiltle> Vehicles </SpecialTiltle>
        <CardData showOnlythree={true} />
        <Button className="px-10"> See more</Button>
      </div>
    </div>
  );
};

export default VehiclesSection;
