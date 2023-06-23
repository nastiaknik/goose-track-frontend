import { useState } from "react";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import {
  StyledForm,
  Title,
  StyledLabel,
  StyledLabelPassword,
  StyledInput,
  SubmitBtn,
} from "./RegisterForm.styled";

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <StyledForm>
      <Title>Sign Up</Title>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="username"
          placeholder="Enter your name"
        />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" placeholder="Enter email" />
      </StyledLabel>
      <StyledLabelPassword>
        Password
        <StyledInput
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="Enter password"
        />
        <button type="button" onClick={handleClick}>
          {" "}
          {isVisible ? <LuEye /> : <LuEyeOff />}
        </button>
      </StyledLabelPassword>
      <SubmitBtn type="submit">
        Sign Up <LuLogIn />
      </SubmitBtn>
    </StyledForm>
  );
};
