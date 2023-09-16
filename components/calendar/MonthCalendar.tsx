"use client";

import { useDateContext } from "@/contexts/DateContext";
import { getMonthDays } from "@/lib/date";
import clsx from "clsx";
import { isSameDay } from "date-fns";
import React, { useMemo, useState } from "react";

const dayNames = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

const MonthCalendar = () => {
  const { displayedDate, selectedDate, setSelectedDate } = useDateContext()!;
  const month = useMemo(() => getMonthDays(displayedDate), [displayedDate]);
  return (
    <div className="grid grid-cols-7 gap-5">
      {dayNames.map((day) => (
        <div key={day} className="font-bold">
          {day.toUpperCase()}
        </div>
      ))}
      {month.map((day, index) => (
        <div
          key={index}
          className={clsx(
            "border-t-2 flex flex-col gap-2 min-h-[200px] p-2",
            isSameDay(selectedDate, day)
              ? "text-orange-700 border-orange-700 bg-orange-100"
              : "text-neutral-800 border-neutral-800",
            day.getMonth() !== displayedDate.getMonth() && "opacity-40"
          )}
          onClick={() => setSelectedDate(day)}
        >
          <span className="text-2xl font-semibold">{day.getDate()}</span>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default MonthCalendar;
