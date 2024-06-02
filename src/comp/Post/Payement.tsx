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

export function Payement({ onPaymentChange }: PaymentProps) {
  const locations: Location[] = [
    { id: 1, name: "Cash On Delivery" },
    { id: 2, name: "Online" },
  ];

  const handleSelectChange = (value: string) => {
    onPaymentChange(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Payment" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payment</SelectLabel>
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
