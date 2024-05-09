import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../../@/lib/utils";
import { Button } from "../../../@/components/ui/button";
import { Calendar } from "./Calender";

interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startDate: Date;
  endDate: Date;
}

export function DatePickerWithRange2({
  className,
  startDate,
  endDate,
}: DatePickerWithRangeProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Button
        id="date"
        variant="outline"
        className={cn("w-[250px] justify-start text-left font-normal")}
        onClick={toggleCalendar}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {startDate && endDate ? (
          <>
            {format(startDate, "LLL dd, y")} - {format(endDate, "LLL dd, y")}
          </>
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      {showCalendar && (
        <div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={startDate}
            selected={{ from: startDate, to: endDate }}
            disabled
          />
        </div>
      )}
    </div>
  );
}
