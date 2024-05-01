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
export function Year() {
  const years: Location[] = [];

  for (let i = 1970; i <= 2024; i++) {
    years.push({ id: i - 1969, name: i.toString() });
  }

  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vehicle year</SelectLabel>
          {years.map((item) => (
            <SelectItem value={item.name}>
              {" "}
              {item.name}
            </SelectItem>
          ))}
          {/* <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
