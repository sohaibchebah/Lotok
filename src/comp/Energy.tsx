import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";
interface CarEnergy {
  id: number;
  name: string;
}
export function Energy() {
  const carEnergyTypes: CarEnergy[] = [
    { id: 1, name: "Gasoline" },
    { id: 2, name: "Diesel" },
    { id: 3, name: "Hybrid" },
    { id: 4, name: "Electric" },
    { id: 5, name: "Natural Gas" },
    { id: 6, name: "Hydrogen Fuel Cell" },
  ];
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Car energy" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Wilayat</SelectLabel>
          {carEnergyTypes.map((item) => (
            <SelectItem value={item.name}>
              {" "}
              {item.id} {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
