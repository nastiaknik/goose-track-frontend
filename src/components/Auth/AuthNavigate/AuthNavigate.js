import { useTranslation } from "react-i18next";
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
  DetailsList,
  StyledOption,
} from "./AuthNavigate.styled";

export const AuthNavigate = ({ linkPath, linktext }) => {
  const { t } = useTranslation();
  const [userProblems, setUserProblems] = useState(null);
  const location = useLocation();

  const handleEmailResend = () => {
    setUserProblems("email");
  };

  const handleForgotPassword = () => {
    setUserProblems("password");
  };

  const handleGoBack = () => {
    setUserProblems(null);
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
              <summary>{t("Have some problems?")}</summary>
              <DetailsList>
                {location.pathname !== "/register" && (
                  <StyledOption onClick={handleForgotPassword}>
                    {t("Forgot password")}
                  </StyledOption>
                )}
                <StyledOption onClick={handleEmailResend}>
                  {t("Resend verification email")}
                </StyledOption>
              </DetailsList>
            </StyledDetails>
            <StyledLink to={linkPath}>{t(linktext)}</StyledLink>
          </>
        ) : (
          <>
            <ResendEmailForm userProblems={userProblems} />
            <StyledLink onClick={handleGoBack}>
              {t(`Back to ${location.pathname.slice(1)}`)}
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
