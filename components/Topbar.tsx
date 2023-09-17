"use client";

import { useDateContext } from "@/contexts/DateContext";
import { DisplayType, useDisplayContext } from "@/contexts/DisplayContext";
import { getMonthName } from "@/lib/date";
import { add } from "date-fns";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaChevronLeft, FaChevronRight, FaPlusCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Topbar = () => {
  return (
    <>
      {/* Mobile navbar */}
      <nav className="md:hidden flex bg-white py-3 px-5 flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <DateSpan />
        </div>
        <div className="flex items-center justify-between">
          <DateButtons />
          <RightButtons />
        </div>
      </nav>

      {/* Computer navbar */}
      <nav className="md:flex hidden justify-between bg-white py-3 px-5 items-center">
        <div className="flex items-center lg:gap-24 gap-8">
          <Logo />
          <div className="flex items-center gap-5">
            <DateButtons />
            <DateSpan />
          </div>
        </div>
        <RightButtons />
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <CgSmartHomeWashMachine className="text-3xl text-slate-800" />
      <span className="text-xl">Laverie TPS</span>
    </div>
  );
};

const DateSpan = () => {
  const { displayedDate } = useDateContext()!;

  return (
    <span className="text-xl font-semibold">
      {getMonthName(displayedDate)} {displayedDate.getFullYear()}
    </span>
  );
};

const DateButtons = () => {
  const { setDisplayedDate } = useDateContext()!;

  const nextDate = () => {
    setDisplayedDate((prev: Date) => add(prev, { months: 1 }));
  };
  const prevDate = () => {
    setDisplayedDate((prev: Date) => add(prev, { months: -1 }));
  };
  const todayDate = () => {
    setDisplayedDate(new Date());
  };

  return (
    <div className="flex items-center gap-1">
      <Button variant="outline" onClick={todayDate}>
        {"Aujourd'hui"}
      </Button>
      <Button variant="outline" size="icon" onClick={prevDate}>
        <FaChevronLeft />
      </Button>
      <Button variant="outline" size="icon" onClick={nextDate}>
        <FaChevronRight />
      </Button>
    </div>
  );
};

const RightButtons = () => {
  const { setDisplay } = useDisplayContext()!;

  return (
    <div className="flex items-center gap-2">
      <Select
        defaultValue="month"
        onValueChange={(v: DisplayType) => setDisplay(v)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="day">Jour</SelectItem>
          <SelectItem value="week">Semaine</SelectItem>
          <SelectItem value="month">Mois</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="default">
        <FaPlusCircle className="mr-2 h-4 w-4" />
        <span>Ajouter</span>
      </Button>
    </div>
  );
};

export default Topbar;
