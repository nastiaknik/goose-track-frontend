import { DatePickerWrapper, StyledDatePicker } from "./DatePicker.styled";

export const DatePicker = (props) => {
  return (
    <>
      <DatePickerWrapper>
        <StyledDatePicker {...props} />
      </DatePickerWrapper>
    </>
  );
};
