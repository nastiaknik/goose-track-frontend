import { format, isWeekend } from "date-fns";
import Media from "react-media";
import { Days, DaysText, DaysTextWeekend } from "./MonthCalendarHead.styled";
import { useDate } from "../../../hooks/useDate";
import { useTranslation } from "react-i18next";

export const MonthCalendarHead = ({ totalDays }) => {
  const { t } = useTranslation();
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
                return matches
                  ? t(format(week, "eee"))
                  : t(format(week, "eeeee"));
              }}
            </Media>
          </DaysTextWeekend>
        ) : (
          <DaysText key={week}>
            <Media query="(min-width: 768px)">
              {(matches) => {
                return matches
                  ? t(format(week, "eee"))
                  : t(format(week, "eeeee"));
              }}
            </Media>
          </DaysText>
        )
      )}
    </Days>
  );
};
