// import { StyleNavLink } from "react-router-dom";
import { Container, StyleNavLink, Span } from "./SideBar.styled";
const Navigation = () => {
  return (
    <nav>
      <Container>
        <Span>User Panel</Span>
        <StyleNavLink to="/myaccount">My account</StyleNavLink>
        <StyleNavLink to="/statistics">Statistscs</StyleNavLink>
        <StyleNavLink to="/calendar">Calendar</StyleNavLink>
      </Container>
    </nav>
  );
};

export default Navigation;
