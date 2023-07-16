import { format, subDays, addDays, addMonths, subMonths } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDate } from "../../../hooks/useDate";
import {
  Wrapper,
  ButtonsContainer,
  ButtonRight,
  ButtonLeft,
  IconRight,
  IconRightActive,
  IconLeft,
  IconLeftActive,
} from "./PeriodPaginator.styled.js";
import { StyledDatePicker } from "components/SharedComponents/DatePicker/DatePicker";
import { useTranslation } from "react-i18next";
import { enUS as en, uk as ua, pl, es } from "date-fns/locale";

export const PeriodPaginator = ({ activePage }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeBtn, setActiveBtn] = useState("");
  const navigate = useNavigate();
  const urlDate = useDate();

  const locale = { en, ua, pl, es };

  const handleNextDay = () => {
    setActiveBtn("next");
    const date = addDays(urlDate, 1);
    navigate(`/calendar/day/${format(date, "yyyy-MM-dd")}`);
  };

  const handlePrevDay = () => {
    setActiveBtn("prev");
    const date = subDays(urlDate, 1);
    navigate(`/calendar/day/${format(date, "yyyy-MM-dd")}`);
  };

  const handleNextMonth = () => {
    setActiveBtn("next");
    const date = addMonths(urlDate, 1);
    navigate(`/calendar/month/${format(date, "yyyy-MM")}`);
  };

  const handlePrevMonth = () => {
    setActiveBtn("prev");
    const date = subMonths(urlDate, 1);
    navigate(`/calendar/month/${format(date, "yyyy-MM")}`);
  };

  const handleClick = (date) => {
    date = new Date(date);
    const formattedDate = format(date, "yyyy-MM-dd");
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <Wrapper>
      {activePage === "month" && (
        <>
          <StyledDatePicker
            selected={new Date(t(urlDate))}
            onChange={(date) => handleClick(date)}
            dateFormat="MMM yyyy"
            locale={locale[currentLanguage]}
            element="button"
          />
          <ButtonsContainer>
            <ButtonLeft type="button" onClick={handlePrevMonth}>
              {activeBtn === "prev" ? <IconLeftActive /> : <IconLeft />}
            </ButtonLeft>
            <ButtonRight type="button" id={"2"} onClick={handleNextMonth}>
              {activeBtn === "next" ? <IconRightActive /> : <IconRight />}
            </ButtonRight>
          </ButtonsContainer>
        </>
      )}

      {activePage === "day" && (
        <>
          <StyledDatePicker
            selected={new Date(urlDate)}
            onChange={(date) => handleClick(date)}
            dateFormat="d MMM yyyy"
            locale={locale[currentLanguage]}
            element="button"
          />
          <ButtonsContainer>
            <ButtonLeft type="button" onClick={handlePrevDay}>
              {activeBtn === "prev" ? <IconLeftActive /> : <IconLeft />}
            </ButtonLeft>
            <ButtonRight type="button" onClick={handleNextDay}>
              {activeBtn === "next" ? <IconRightActive /> : <IconRight />}
            </ButtonRight>
          </ButtonsContainer>
        </>
      )}
    </Wrapper>
  );
};
