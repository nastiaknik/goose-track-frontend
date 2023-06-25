import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { ResendEmailForm } from "../ResendEmailForm/ResendEmailForm";
import {
  Container,
  ContentThumb,
  StyledLink,
  StyledDetails,
  StyledOption,
} from "./AuthNavigate.styled";

export const AuthNavigate = ({ linkPath, linktext, children }) => {
  const [userProblems, setUserPrioblems] = useState(null);
  const location = useLocation();

  const handleEmailResend = () => {
    setUserPrioblems("email");
  };

  const handleGoBack = () => {
    setUserPrioblems(null);
  };

  return (
    <Container currentPage={location.pathname}>
      <ContentThumb>
        {!userProblems ? (
          <>
            {location.pathname === "/register" ? (
              <RegisterForm />
            ) : (
              <LoginForm />
            )}
            <StyledDetails>
              <summary>Have some problems?</summary>
              <ul>
                <StyledOption onClick={handleEmailResend}>
                  Resend verification email
                </StyledOption>
              </ul>
            </StyledDetails>
            <StyledLink to={linkPath}>{linktext}</StyledLink>
          </>
        ) : (
          <>
            <ResendEmailForm />
            <StyledLink onClick={handleGoBack}>
              Back to {location.pathname.slice(1)}
            </StyledLink>
          </>
        )}
      </ContentThumb>
    </Container>
  );
};

AuthNavigate.propTypes = {
  linkPath: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
};
