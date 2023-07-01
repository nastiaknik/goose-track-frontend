import { format, isSameMonth } from "date-fns";
import PropTypes from "prop-types";
import { useDate } from "../../../hooks/useDate";
import {
  Container,
  NavLinkDay,
  ActiveLinkDay,
  NavLinkMonth,
  ActiveLinkMonth,
} from "./PeriodTypeSelect.styled.js";

export const PeriodTypeSelect = ({ activePage }) => {
  const urlDate = useDate();
  const today = new Date();

  const currentDate = format(urlDate, "yyyy-MM");
  const currentDay = format(urlDate, "yyyy-MM-dd");
  const formattedToday = format(today, "yyyy-MM-dd");

  const isToday = isSameMonth(urlDate, today);

  return (
    <Container>
      {activePage === "month" ? (
        <ActiveLinkMonth to={`/calendar/month/${currentDate}`}>
          Month
        </ActiveLinkMonth>
      ) : (
        <NavLinkMonth to={`/calendar/month/${currentDate}`}>Month</NavLinkMonth>
      )}

      {activePage === "day" ? (
        <ActiveLinkDay
          to={
            isToday
              ? `/calendar/day/${formattedToday}`
              : `/calendar/day/${currentDay}`
          }
        >
          Day
        </ActiveLinkDay>
      ) : (
        <NavLinkDay
          to={
            isToday
              ? `/calendar/day/${formattedToday}`
              : `/calendar/day/${currentDay}`
          }
        >
          Day
        </NavLinkDay>
      )}
    </Container>
  );
};

PeriodTypeSelect.propTypes = {
  changePage: PropTypes.array,
};
