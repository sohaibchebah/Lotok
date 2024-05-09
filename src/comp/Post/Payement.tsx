import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";
interface Location {
  id: number;
  name: string;
}
export function Payement() {
  const locations: Location[] = [
    { id: 1, name: "Cash On Delivery" },
    { id: 2, name: "On Line" },
  ];
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Payement" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payement</SelectLabel>
          {locations.map((item) => (
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
