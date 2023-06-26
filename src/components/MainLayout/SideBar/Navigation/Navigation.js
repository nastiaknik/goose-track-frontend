import { Container, StyleNavLink, Statistscs, Span, Calendar, User } from "./NavigationNav.styled";
export const Navigation = ({ toggleMenu }) => {
  return (
    <nav>
      <Container>
        <Span>User Panel</Span>
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
    </nav>
  );
};
