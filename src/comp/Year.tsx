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

interface Location {
  id: number;
  name: string;
}

interface YearProps {
  onYearChange: (year: string) => void;
}

export function Year({ onYearChange }: YearProps) {
  const years: Location[] = [];

  for (let i = 1970; i <= 2024; i++) {
    years.push({ id: i - 1969, name: i.toString() });
  }

  const handleSelectChange = (value: string) => {
    onYearChange(value);
    console.log("Year Selected:", value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vehicle year</SelectLabel>
          {years.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
