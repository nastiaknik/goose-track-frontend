import PropTypes from "prop-types";
import { useState } from "react";

import { LuEye, LuEyeOff } from "react-icons/lu";
import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

import { PasswordStrengthIndicator } from "../../Auth/PasswordStrangthIndicator/PasswordStrengthIndicator";
import {
  StyledLabel,
  InputThumb,
  StyledInput,
  StyledValidation,
} from "./FormInput.styled";

export const FormInput = ({
  text,
  name,
  type,
  placeholder,
  isSubmited,
  formik,
  setAllowSubmit,
  user,
  auth,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleIcon = (error) => {
    if (!isSubmited) {
      return;
    }

    return error ? <AiOutlineExclamationCircle /> : <AiOutlineCheckCircle />;
  };

  const handleChange = (e) => {
    formik.handleChange(e);
    if (!setAllowSubmit || !user) {
      return;
    }

    if (user[`${name}`] !== e.target.value) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  };

  return (
    <StyledLabel
      auth={auth}
      isSubmited={isSubmited}
      error={formik.errors[`${name}`]}
    >
      {text}
      <StyledInput
        type={isVisible ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={formik.values[`${name}`]}
        isSubmited={isSubmited}
        error={formik.errors[`${name}`]}
        auth={auth}
      />
      {formik.touched[`${name}`] && (
        <StyledValidation
          isSubmited={isSubmited}
          error={formik.errors[`${name}`]}
          type={type}
        >
          {formik.errors[`${name}`]
            ? formik.errors[`${name}`]
            : `This is a CORRECT ${name}`}
        </StyledValidation>
      )}
      <InputThumb>
        {handleIcon(formik.errors[`${name}`])}
        {name === "password" && (
          <>
            <button type="button" onClick={handleClick}>
              {isVisible ? <LuEye /> : <LuEyeOff />}
            </button>
            <PasswordStrengthIndicator password={formik.values[`${name}`]} />
          </>
        )}
      </InputThumb>
    </StyledLabel>
  );
};

FormInput.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isSubmited: PropTypes.bool.isRequired,
  formik: PropTypes.object.isRequired,
  setAllowSubmit: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string,
    phone: PropTypes.string,
    skype: PropTypes.string,
    imgURL: PropTypes.string,
    updatedEmail: PropTypes.string,
  }),
};
