import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

import { DatePicker } from "components/SharedComponents/DatePicker/DatePicker";
import { format } from "date-fns";
import {
  StyledLabel,
  InputThumb,
  StyledValidation,
  StyledIconContainer,
  ArrowIcon,
} from "./DataInput.styled";

export const DataInput = ({
  text,
  name,
  isSubmited,
  formik,
  setAllowSubmit,
}) => {
  const handleIcon = (error) => {
    if (!isSubmited) {
      return;
    }

    return error ? <AiOutlineExclamationCircle /> : <AiOutlineCheckCircle />;
  };

  return (
    <StyledLabel isSubmited={isSubmited} error={formik.errors[`${name}`]}>
      {!isSubmited && (
        <StyledIconContainer>
          <ArrowIcon />
        </StyledIconContainer>
      )}
      {text}
      <DatePicker
        name="birthday"
        selected={new Date(formik?.values.birthday)}
        onChange={async (date) => {
          formik.setFieldValue("birthday", format(date, "yyyy-MM-dd"));
          await Promise.resolve();
          setAllowSubmit(true);
        }}
        dateFormat="dd-MM-yyyy"
        maxDate={new Date()}
        placeholderText="dd-MM-yyyy"
        formatWeekDay={(day) => day.charAt(0)}
        calendarStartDay={1}
        isSubmited={isSubmited}
        error={formik.errors[`${name}`]}
      />
      {formik.touched[`${name}`] && (
        <StyledValidation
          isSubmited={isSubmited}
          error={formik.errors[`${name}`]}
        >
          {formik.errors[`${name}`]
            ? formik.errors[`${name}`]
            : `This is an CORRECT ${name}`}
        </StyledValidation>
      )}
      <InputThumb>{handleIcon(formik.errors[`${name}`])}</InputThumb>
    </StyledLabel>
  );
};
