"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type DateContextType = {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  displayedDate: Date;
  setDisplayedDate: Dispatch<SetStateAction<Date>>;
};

const DateContext = createContext<DateContextType | null>(null);

export const useDateContext = (): DateContextType | null => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }: PropsWithChildren) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayedDate, setDisplayedDate] = useState<Date>(new Date());

  return (
    <DateContext.Provider
      value={{ selectedDate, setSelectedDate, displayedDate, setDisplayedDate }}
    >
      {children}
    </DateContext.Provider>
  );
};
