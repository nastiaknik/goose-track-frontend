
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import {
  StyledDatePicker,
  DatePickerWrapper,
  DataContainer,
  PrevDayButton,
  NextDayButton,
  LegendList,
  ChartHead,
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
        <PrevDayButton onClick={handlePreviousDay}>
          <MdOutlineKeyboardArrowLeft />
        </PrevDayButton>
        <NextDayButton onClick={handleNextDay}>
          <MdOutlineKeyboardArrowRight />
        </NextDayButton>
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

