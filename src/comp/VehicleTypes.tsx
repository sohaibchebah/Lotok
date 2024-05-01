import React, { useState } from "react";

interface TypeProps {
  id: number;
  name: string;
}

const VehicleTypes: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>("Car");

  // Fake data for the tab list
  const tabList: TypeProps[] = [
    { id: 1, name: "Car" },
    { id: 2, name: "Motor" },
    { id: 3, name: "Truck" },
  ];

  return (
    <div className="flex absolute top-0 max-lg:translate-x-[-50%] left-[50%] lg:left-0">
      {tabList.map((tabName) => (
        <div
          key={tabName.name}
          className={`cursor-pointer text-white font-semibold px-4 py-1 border border-gray-300 rounded-sm mr-2 ${
            selectedTab === tabName.name ? "bg-black text-black" : ""
          }`}
          onClick={() => setSelectedTab(tabName.name)}
        >
          {tabName.name}
        </div>
      ))}
    </div>
  );
};

export default VehicleTypes;
