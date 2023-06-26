import logo1x from "assets/images/gooseMot@1x.png";
import logo2x from "assets/images/gooseMot@2x.png";
import { Calendar, DivCalendar, Span, Div } from "./CalendarTitle.styled";

export const CalendarTitle = () => {
  return (
    <DivCalendar>
      <img size={64} src={`${logo1x}`} srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Goose" />
      <Div>
        <Calendar>Calendar</Calendar>
        <Span>
          <span>Let go</span> of the past and focus on the present!
        </Span>
      </Div>
    </DivCalendar>
  );
};
