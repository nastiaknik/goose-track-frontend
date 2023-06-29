import {
  format,
  startOfMonth,
  eachDayOfInterval,
  lastDayOfMonth,
  startOfWeek,
  lastDayOfWeek,
} from "date-fns";

import { useDate } from "../../../hooks/useDate";
import { MonthCalendarHead } from "../MonthCalendarHead/MonthCalendarHead";
import { CalendarTable } from "../CalendarTable/CalendarTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksByMonth } from "redux/tasks/operations";

export const ChoosedMonth = () => {
  const dispatch = useDispatch();

  const urlDate = useDate();
  const firstDay = startOfMonth(urlDate);
  const lastDay = lastDayOfMonth(urlDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  const year = format(urlDate, "yyyy");
  const month = format(urlDate, "MM");

  useEffect(() => {
    const currentData = {
      year,
      month,
    };

    dispatch(getTasksByMonth(currentData));
  }, [dispatch, month, year]);

  return (
    <>
      <MonthCalendarHead totalDays={totalDays} />
      <CalendarTable totalDays={totalDays} />
    </>
  );
};
