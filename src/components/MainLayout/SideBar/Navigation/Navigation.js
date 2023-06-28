import { Container, Nav, StyleNavLink, Statistscs, Span, Calendar, User } from "./NavigationNav.styled";
export const Navigation = ({ toggleMenu }) => {
  return (
    <Nav>
      <Span>User Panel</Span>
      <Container>
        <StyleNavLink to="/account" onClick={toggleMenu}>
          <User />
          My account
        </StyleNavLink>
        <StyleNavLink to="/calendar" onClick={toggleMenu}>
          <Calendar />
          Calendar
        </StyleNavLink>
        <StyleNavLink to="/statistics" onClick={toggleMenu}>
          <Statistscs />
          Statistscs
        </StyleNavLink>
      </Container>
    </Nav>
  );
};
