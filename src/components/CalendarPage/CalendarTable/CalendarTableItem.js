import { format, isSameDay, isThisMonth, isToday } from "date-fns";
import { useParams } from "react-router-dom";
import { DaysOfMonth, Today } from "./CalendarTableItem.styled";

import PropTypes from "prop-types";

export const CalendarTableItem = ({ day, dayTasks }) => {
  const DayOfMonth = useParams();

  const AllDays = isThisMonth(new Date(DayOfMonth.currentDate))
    ? isToday(day)
      ? Today
      : DaysOfMonth
    : isSameDay(new Date(DayOfMonth.currentDate), new Date(day))
    ? Today
    : DaysOfMonth;
  return (
    <>
      <AllDays>{format(day, "d")}</AllDays>
    </>
  );
};
CalendarTableItem.propTypes = {
  day: PropTypes.object.isRequired,
  dayTasks:
    PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        createDay: PropTypes.number.isRequired,
        createMonth: PropTypes.number.isRequired,
        createYear: PropTypes.number.isRequired,
        end: PropTypes.string,
        owner: PropTypes.any.isRequired,
        priority: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ) || undefined.isRequired,
  gridRowHeight: PropTypes.number.isRequired,
};
