import logo1x from "assets/images/gooseMot@1x.png";
import logo2x from "assets/images/gooseMot@2x.png";
import { Calendar, DivCalendar, Span, Div } from "./CalendarTitle.styled";
import { useTranslation } from "react-i18next";

export const CalendarTitle = () => {
  const { t } = useTranslation();

  return (
    <DivCalendar>
      <img
        size={64}
        src={`${logo1x}`}
        srcSet={`${logo1x} 1x, ${logo2x} 2x`}
        alt="Goose"
      />
      <Div>
        <Calendar>{t("Calendar")}</Calendar>
        <Span>
          <span>{t("Let go")}</span>{" "}
          {t("of the past and focus on the present!")}
        </Span>
      </Div>
    </DivCalendar>
  );
};
