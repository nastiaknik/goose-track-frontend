import { format, isWeekend } from "date-fns";
import Media from "react-media";
import { Days, DaysText, DaysTextWeekend } from "./MonthCalendarHead.styled";
import { useDate } from "../../../hooks/useDate";

export const MonthCalendarHead = ({ totalDays }) => {
  const urlDate = useDate();
  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day < 7; day++) {
      weeks.push(date[day]);
    }
    return weeks;
  })(totalDays);

  return (
    <Days>
      {weeks.map((week) =>
        isWeekend(week, urlDate) ? (
          <DaysTextWeekend key={week}>
            <Media query="(min-width: 768px)">
              {(matches) => {
                return matches ? format(week, "eee") : format(week, "eeeee");
              }}
            </Media>
          </DaysTextWeekend>
        ) : (
          <DaysText key={week}>
            <Media query="(min-width: 768px)">
              {(matches) => {
                return matches ? format(week, "eee") : format(week, "eeeee");
              }}
            </Media>
          </DaysText>
        )
      )}
    </Days>
  );
};
