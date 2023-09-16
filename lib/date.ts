import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfWeek,
} from "date-fns";
import { fr } from "date-fns/locale";
import { capitalize } from "./string";

export const getMonthDays = (date: Date): Date[] => {
  const formatedFirstMonthDay = format(date, "yyyy-MM-01");
  const firstMonthDay = parse(formatedFirstMonthDay, "yyyy-MM-01", new Date(), {
    weekStartsOn: 2,
  });
  const lastMonthDay = endOfMonth(firstMonthDay);

  return eachDayOfInterval({
    start: startOfWeek(firstMonthDay, { weekStartsOn: 1 }),
    end: endOfWeek(lastMonthDay, { weekStartsOn: 1 }),
  });
};

export const getMonthName = (date: Date): string => {
  return capitalize(format(date, "MMMM", { locale: fr }));
};
