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

interface PaymentProps {
  onPaymentChange: (paymentMethod: string) => void;
}

export function AirConditioner({ onPaymentChange }: PaymentProps) {
  const locations: Location[] = [
    { id: 1, name: "Yes" },
    { id: 2, name: "No" },
   
  ];

  const handleSelectChange = (value: string) => {
    onPaymentChange(value);
  };
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="AirConditioner" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>AirConditioner</SelectLabel>
          {locations.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.id} {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
