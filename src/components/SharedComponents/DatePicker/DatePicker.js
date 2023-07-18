import { forwardRef } from "react";
import { DatePickerWrapper, Input, Button } from "./DatePicker.styled";
import DatePicker from "react-datepicker";

export const StyledDatePicker = (props) => {
  return (
    <DatePickerWrapper>
      {props.element === "input" ? (
        <Input {...props} />
      ) : (
        <DatePicker customInput={<CustomInput {...props} />} {...props} />
      )}
    </DatePickerWrapper>
  );
};

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <Button onClick={onClick} ref={ref}>
      {value}
    </Button>
  );
});
