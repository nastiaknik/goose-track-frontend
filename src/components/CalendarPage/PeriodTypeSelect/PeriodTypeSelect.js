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
import { useTranslation } from "react-i18next";

export const PeriodTypeSelect = ({ activePage }) => {
  const { t } = useTranslation();
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
          {t("Month")}
        </ActiveLinkMonth>
      ) : (
        <NavLinkMonth to={`/calendar/month/${currentDate}`}>
          {t("Month")}
        </NavLinkMonth>
      )}

      {activePage === "day" ? (
        <ActiveLinkDay
          to={
            isToday
              ? `/calendar/day/${formattedToday}`
              : `/calendar/day/${currentDay}`
          }
        >
          {t("Day")}
        </ActiveLinkDay>
      ) : (
        <NavLinkDay
          to={
            isToday
              ? `/calendar/day/${formattedToday}`
              : `/calendar/day/${currentDay}`
          }
        >
          {t("Day")}
        </NavLinkDay>
      )}
    </Container>
  );
};

PeriodTypeSelect.propTypes = {
  changePage: PropTypes.array,
};
