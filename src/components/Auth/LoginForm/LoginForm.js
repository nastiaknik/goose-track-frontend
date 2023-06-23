import { useState } from "react";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import {
  StyledLoginForm,
  LoginTitle,
  LoginLabel,
  LoginPasswordLabel,
  LoginInput,
  LoginSubmitBtn,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <StyledLoginForm>
      <LoginTitle>Log In</LoginTitle>
      <LoginLabel>
        Email
        <LoginInput type="email" name="email" placeholder="Enter email" />
      </LoginLabel>
      <LoginPasswordLabel>
        Password
        <LoginInput
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="Enter password"
        />
        <button type="button" onClick={handleClick}>
          {isVisible ? <LuEye /> : <LuEyeOff />}
        </button>
      </LoginPasswordLabel>
      <LoginSubmitBtn type="submit">
        Log In <LuLogIn />
      </LoginSubmitBtn>
    </StyledLoginForm>
  );
};
