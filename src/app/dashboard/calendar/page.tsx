"use client";
import React from "react";

import { Calendar } from "@/components/ui/calendar";

function formatDate(date?: Date) {
  return date?.toLocaleDateString("es-CR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multiDates, setMultiDates] = React.useState<Date[] | undefined>([]);
  const smallDate = formatDate(date);
  return (
    <div className="flex-col gap-4 sm:flex sm:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multiDates}
        onSelect={setMultiDates}
        className="rounded-md border shadow"
      />
      <div className="div">
        <h1 className="text-3xl">Information</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multiDates?.map((date) => formatDate(date)).join(", ")}</p>
      </div>
    </div>
  );
};

export default CalendarPage;
