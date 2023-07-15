import PropTypes from "prop-types";
import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

import { DatePicker } from "components/SharedComponents/DatePicker/DatePicker";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { enUS as en, uk as ua, pl, es } from "date-fns/locale";

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
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const locale = { en, ua, pl, es };

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
          formik.setFieldValue(
            "birthday",
            date ? format(date, "yyyy-MM-dd") : null
          );
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
        locale={locale[currentLanguage]}
      />
      {formik.touched[`${name}`] && (
        <StyledValidation
          isSubmited={isSubmited}
          error={formik.errors[`${name}`]}
        >
          {formik.errors[`${name}`]
            ? formik.errors[`${name}`]
            : `This is a CORRECT ${name}`}
        </StyledValidation>
      )}
      <InputThumb>{handleIcon(formik.errors[`${name}`])}</InputThumb>
    </StyledLabel>
  );
};

DataInput.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  isSubmited: PropTypes.bool.isRequired,
  formik: PropTypes.object.isRequired,
  setAllowSubmit: PropTypes.func,
};
