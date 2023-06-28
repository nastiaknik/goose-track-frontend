import { DayCalendarHead } from "../DayCalendarHead/DayCalendarHead";
import {
  Wrapper,
  Day,
  DayOfWeek,
  SelectedDate,
  SelectedDay,
} from "./ChoosedDay.styled";
import { useEffect, useState } from "react";
import { TasksColumnsList } from "../TaskColumnBoard/TaskColumnList";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTasksByDay } from "redux/tasks/operations";
import { useDate } from "../../../hooks/useDate";

export const ChoosedDay = () => {
  const formattedDate = useDate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlDate = useDate();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getDaysOfWeek = () => {
    if (screenWidth >= 768) {
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    } else {
      return ["S", "M", "T", "W", "T", "F", "S"];
    }
  };

  const year = format(urlDate, "yyyy");
  const month = format(urlDate, "MMMM").toLowerCase();
  const day = format(urlDate, "dd");

  useEffect(() => {
    const currentData = {
      year,
      month,
      day,
    };

    dispatch(getTasksByDay(currentData));

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [day, dispatch, month, year]);

  const selectDay = formattedDate;

  const currentDayOfWeek = selectDay.getDay();
  const [selectedDay, setSelectedDay] = useState(new Date(formattedDate));
  const days = [];

  const handleDayClick = (date) => {
    setSelectedDay(date);
    date = new Date(date);
    const formattedDate = format(date, "ddMMMMyyyy");
    const result = formattedDate.charAt(0) + formattedDate.slice(1);
    navigate(`/calendar/day/${result}`);
  };

  for (let i = 0; i < 7; i++) {
    const date = new Date(selectDay);
    date.setDate(
      selectDay.getDate() +
        i -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1)
    );

    const isDaySelected =
      selectedDay &&
      selectedDay.getDate() &&
      selectDay.getDate() === date.getDate();

    days.push(
      <Day key={i} onClick={() => handleDayClick(date)}>
        <DayOfWeek>{getDaysOfWeek()[date.getDay()]}</DayOfWeek>
        {isDaySelected ? (
          <SelectedDay>{date.getDate()}</SelectedDay>
        ) : (
          <SelectedDate>{date.getDate()}</SelectedDate>
        )}
      </Day>
    );
  }
  return (
    <Wrapper>
      <DayCalendarHead days={days} />
      <TasksColumnsList />
    </Wrapper>
  );
};
