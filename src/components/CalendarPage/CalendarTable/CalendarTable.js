import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
  isSameDay,
  formatISO,
  isSameMonth,
} from "date-fns";
import PropTypes from "prop-types";
import { useMedia } from "react-use";

import {
  ListMonth,
  DateOfWeekCurrentMonth,
  DateOfWeekOtherMonth,
  ChoosedDate,
  DayWeek,
  Days,
  Month,
  ListDays,
  OtherMonthStyledLink,
  CurrentMonthStyledLink,
} from "./CalendarTable.styled";

export const CalendarHead = ({ currentDay }) => {
  const isWide = useMedia("(min-width: 768px)");

  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }

  const List = currentDay ? ListDays : ListMonth;

  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => {
          const Week = currentDay ? Days : Month;
          const StyledLink = !isSameMonth(new Date(day), new Date())
            ? OtherMonthStyledLink
            : CurrentMonthStyledLink;

          const DateOfWeek = isSameMonth(new Date(day), new Date())
            ? DateOfWeekCurrentMonth
            : DateOfWeekOtherMonth;

          const DateWeek = isSameDay(new Date(currentDay), new Date(day))
            ? ChoosedDate
            : DateOfWeek;

          return (
            <Week key={idx}>
              {isWide ? (
                <DayWeek>{format(day, "EEE")}</DayWeek>
              ) : (
                <DayWeek>{format(day, "EEEEE")}</DayWeek>
              )}

              {currentDay && (
                <StyledLink
                  to={`/calendar/day/${formatISO(new Date(day), {
                    representation: "date",
                  })}`}
                >
                  <DateWeek>{format(day, "d")}</DateWeek>
                </StyledLink>
              )}
            </Week>
          );
        })}
      </List>
    </>
  );
};

CalendarHead.propTypes = {
  currentDay: PropTypes.string,
};
