import React from "react";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaChevronLeft, FaChevronRight, FaPlusCircle } from "react-icons/fa";
import { Button } from "./ui/button";

const Topbar = () => {
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
            <Button variant="outline">{"Aujourd'hui"}</Button>
            <Button variant="outline" size="icon">
              <FaChevronLeft />
            </Button>
            <Button variant="outline" size="icon">
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
              <Button variant="outline">{"Aujourd'hui"}</Button>
              <Button variant="outline" size="icon">
                <FaChevronLeft />
              </Button>
              <Button variant="outline" size="icon">
                <FaChevronRight />
              </Button>
            </div>
            <span className="text-xl font-semibold">Mardi 5 septembre</span>
          </div>
        </div>

        <div>
          <Button variant="outline">
            <FaPlusCircle className="mr-2 h-4 w-4" />
            <span>Ajouter</span>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
