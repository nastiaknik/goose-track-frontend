import {
  StyledDatePicker,
  DatePickerWrapper,
  DataContainer,
  PrevDayButton,
  NextDayButton,
  LegendList,
  ChartHead,
  ButtDiv,
  LeftArrow,
  RightArrow,
} from "./StatisticsHead.styled";
import { TbPointFilled } from "react-icons/tb";

export const StatisticsHead = ({
  selectedDate,
  setSelectedDate,
  handlePreviousDay,
  handleNextDay,
}) => {
  return (
    <ChartHead>
      <DataContainer>
        <DatePickerWrapper>
          <StyledDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="d MMMM yyyy "
          />
        </DatePickerWrapper>
        <ButtDiv>
          <PrevDayButton onClick={handlePreviousDay}>
            <LeftArrow />
          </PrevDayButton>
          <NextDayButton onClick={handleNextDay}>
            <RightArrow />
          </NextDayButton>
        </ButtDiv>
      </DataContainer>
      <LegendList>
        <li>
          <TbPointFilled color="#FFD2DD" size={20} />
          <span>By Day</span>
        </li>
        <li>
          <TbPointFilled color="#3E85F3" size={20} />
          <span>By Month</span>
        </li>
      </LegendList>
    </ChartHead>
  );
};
