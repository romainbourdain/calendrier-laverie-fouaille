import { PropsWithChildren } from "react";
import { DateProvider } from "./DateContext";
import { DisplayProvider } from "./DisplayContext";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <DisplayProvider>
      <DateProvider>{children}</DateProvider>
    </DisplayProvider>
  );
};

export default Provider;
