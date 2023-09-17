"use client";

import MonthCalendar from "@/components/calendar/MonthCalendar";
import { useDisplayContext } from "@/contexts/DisplayContext";

const Page = () => {
  const { display } = useDisplayContext()!;

  return (
    <main className="flex-1 flex flex-col p-5 gap-5 h-full overflow-scroll">
      {display === "month" && <MonthCalendar />}
    </main>
  );
};

export default Page;
