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

interface EnergyProps {
  onEnergyChange: (energy: string) => void;
}

export function Energy({ onEnergyChange }: EnergyProps) {
  const carEnergyTypes: CarEnergy[] = [
    { id: 1, name: "Gasoline" },
    { id: 2, name: "Diesel" },
    { id: 3, name: "Hybrid" },
    { id: 4, name: "Electric" },
    { id: 5, name: "Natural Gas" },
    { id: 6, name: "Hydrogen Fuel Cell" },
  ];

  const handleSelectChange = (value: string) => {
    onEnergyChange(value);
    console.log("Energy Type Selected:", value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Car energy" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Car energy</SelectLabel>
          {carEnergyTypes.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.id} {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
