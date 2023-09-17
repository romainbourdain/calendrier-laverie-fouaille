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
  const { displayedDate, setDisplayedDate } = useDateContext()!;
  const { setDisplay } = useDisplayContext()!;

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
    <>
      {/* Mobile navbar */}
      <nav className="md:hidden flex bg-white py-3 px-5 flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <CgSmartHomeWashMachine className="text-3xl text-slate-800" />
            <span className="text-xl">Laverie TPS</span>
          </div>
          <span className="text-xl font-semibold">Mardi 5 septembre</span>
        </div>
        <div className="flex items-center justify-between">
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
          <Button variant="outline">
            <FaPlusCircle className="mr-2 h-4 w-4" />
            <span>Ajouter</span>
          </Button>
        </div>
      </nav>

      {/* Computer navbar */}
      <nav className="md:flex hidden justify-between bg-white py-3 px-5 items-center">
        <div className="flex items-center lg:gap-24 gap-8">
          <div className="flex items-center gap-2">
            <CgSmartHomeWashMachine className="text-3xl text-slate-800" />
            <span className="text-xl">Laverie TPS</span>
          </div>
          <div className="flex items-center gap-5">
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
            <span className="text-xl font-semibold">
              {getMonthName(displayedDate)} {displayedDate.getFullYear()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FaPlusCircle className="mr-2 h-4 w-4" />
            <span>Ajouter</span>
          </Button>
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
        </div>
      </nav>
    </>
  );
};

export default Topbar;
