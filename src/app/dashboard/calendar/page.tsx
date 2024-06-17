"use client";
import React from "react";

import { Calendar } from "@/components/ui/calendar";

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const smallDate = date?.toLocaleDateString("es-CR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return (
    <div className="flex-col gap-4 sm:flex sm:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div className="div">
        <h1 className="text-3xl">Information</h1>
        <p className="border-b">{smallDate}</p>
      </div>
    </div>
  );
};

export default CalendarPage;
