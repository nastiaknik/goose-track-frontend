import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
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
} from "./ButtData.styled";
import { getTasksByMonth } from "redux/tasks/operations";



const DateButton = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };
  const dispatch = useDispatch();
  
  const params = useMemo(() =>
  {
    return {year: `${selectedDate.getFullYear()}`,
    month: `${selectedDate.getMonth()+1}`.padStart(2, "0")}
  }, [selectedDate])
  
  // console.log(params)

  useEffect(() => {
    dispatch(getTasksByMonth(params));
  }, [params, selectedDate, dispatch]);

  return (
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
  );
};

export default DateButton;