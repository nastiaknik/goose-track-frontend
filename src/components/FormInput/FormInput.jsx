import { useState } from "react";

import { LuEye, LuEyeOff } from "react-icons/lu";
import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

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
  children,
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

  return (
    <StyledLabel isSubmited={isSubmited} error={formik.errors[`${name}`]}>
      {text}
      <StyledInput
        type={isVisible ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[`${name}`]}
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
      <InputThumb>
        {handleIcon(formik.errors[`${name}`])}
        {name === "password" && (
          <button type="button" onClick={handleClick}>
            {isVisible ? <LuEye /> : <LuEyeOff />}
          </button>
        )}
      </InputThumb>
    </StyledLabel>
  );
};
