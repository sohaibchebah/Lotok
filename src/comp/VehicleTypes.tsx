import React, { useState } from "react";

interface TypeProps {
  id: number;
  name: string;
}

interface VehicleTypesProps {
  onVehicleTypeChange: (type: string) => void;
}

const VehicleTypes: React.FC<VehicleTypesProps> = ({ onVehicleTypeChange }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>("Car");

  const tabList: TypeProps[] = [
    { id: 1, name: "Car" },
    { id: 2, name: "Motor" },
    { id: 3, name: "Truck" },
  ];

  const handleTabClick = (name: string) => {
    setSelectedTab(name);
    onVehicleTypeChange(name);
  };

  return (
    <div className="flex absolute top-0 max-lg:translate-x-[-50%] left-[50%] lg:left-0">
      {tabList.map((tabName) => (
        <div
          key={tabName.name}
          className={`cursor-pointer text-white font-semibold px-4 py-1 border border-gray-300 rounded-sm mr-2 ${
            selectedTab === tabName.name ? "bg-black text-black" : ""
          }`}
          onClick={() => handleTabClick(tabName.name)}
        >
          {tabName.name}
        </div>
      ))}
    </div>
  );
};

export default VehicleTypes;
