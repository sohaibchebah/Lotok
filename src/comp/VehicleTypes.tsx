import React from "react";
import { useState } from "react";
interface TypeProps {
    id: number; 
    name: string; 
}
// const FakeTypes: TypeProps {

// }
const VehicleTypes = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  // Fake data for the tab list
  const tabList: TypeProps[] = ["Car", "Motorcycle", "Truck"];

  return (
    <div className="flex">
      {tabList.map((tabName) => (
        <div
          key={tabName}
          className={`cursor-pointer px-4 py-2 border border-gray-300 rounded-lg mr-2 ${
            selectedTab === tabName ? "bg-white text-black" : ""
          }`}
          onClick={() => setSelectedTab(tabName)}
        >
          {tabName}
        </div>
      ))}
    </div>
  );
};

export default VehicleTypes;
