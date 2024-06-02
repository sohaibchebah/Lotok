"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../../@/lib/utils";
import { Button } from "../../../@/components/ui/button";
import { Calendar } from "../../../@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";
import { render } from "react-dom";
import { createContext, useContext, useState, ReactNode } from "react";

interface DatePickerProps {
  onDateSelected?: (date: string) => void; // Optional callback for more complex scenarios
}
interface ChildComponentProps {
  onDataChange: (data: Date) => void;
}
// interface AppContextInterface {
//   data: Date;
//   setData: (data: Date) => void;
// }
// const AppContext = createContext<AppContextInterface | null>(null);
export function DatePicker({ onDataChange }: ChildComponentProps) {
  const [date, setDate] = React.useState<Date>();
  const handleDate = (date: Date) => {
    if (date) {
      onDataChange(date);
    }
    // onDataChange(date);
  };

  // const { data, setData } = useContext(MyContext);
  // const [data, setData] = useState<Date>();
  // state: ParentState = {
  //   data: "Hello World",
  // };
  // const handleDateChange = () => {
  //   setData({ ...data, selectedDate: { date } });
  // };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span>Driving Licence's Experition Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {" "}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          onDayClick={handleDate(date)}
          initialFocus
        />
        {/* <MyContext.Provider value={date} /> */}
      </PopoverContent>
    </Popover>
  );
}
