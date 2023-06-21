import { useLocation } from "react-router-dom";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { Container, ContentThumb, StyledLink } from "./AuthNavigate.styled";

export const AuthNavigate = ({ linkPath, linktext, children }) => {
  const location = useLocation();

  return (
    <Container currentPage={location.pathname}>
      <ContentThumb>
        {location.pathname === "/register" ? <RegisterForm /> : <LoginForm />}
        <StyledLink to={linkPath}>{linktext}</StyledLink>
      </ContentThumb>
    </Container>
  );
};
