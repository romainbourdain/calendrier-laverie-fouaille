"use client";

import MonthCalendar from "@/components/calendar/MonthCalendar";

const Page = () => {
  return (
    <main className="flex-1 flex flex-col p-5 gap-5 h-full overflow-scroll">
      <MonthCalendar />
    </main>
  );
};

export default Page;
