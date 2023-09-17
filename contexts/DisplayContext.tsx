"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

export type DisplayType = "month" | "week" | "day" | "mini";

export type DisplayContextType = {
  display: DisplayType;
  setDisplay: (display: DisplayType) => void;
};

const DisplayContext = createContext<DisplayContextType | null>(null);

export const useDisplayContext = (): DisplayContextType | null => {
  return useContext(DisplayContext);
};

export const DisplayProvider = ({ children }: PropsWithChildren) => {
  const [display, setDisplay] = useState<DisplayType>("month");
  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};
