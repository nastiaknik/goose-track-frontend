import { forwardRef } from "react";
import { DatePickerWrapper, Input, Button } from "./DatePicker.styled";
import DatePicker from "react-datepicker";

export const StyledDatePicker = (props) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        customInput={<CustomInput element={props.element} />}
        {...props}
      />
    </DatePickerWrapper>
  );
};

const CustomInput = forwardRef(({ value, onClick, element }, ref) => {
  console.log(element);
  return element === "input" ? (
    <Input onClick={onClick} ref={ref} value={value} />
  ) : (
    <Button onClick={onClick} ref={ref}>
      {value}
    </Button>
  );
});
