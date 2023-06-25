import { Container, StyleNavLink, Statistscs, Span, Calendar, User } from "./NavigationNav.styled";
export const Navigation = () => {
  return (
    <nav>
      <Container>
        <Span>User Panel</Span>
        <StyleNavLink to="/account">
          <User />
          My account
        </StyleNavLink>
        <StyleNavLink to="/calendar">
          <Calendar />
          Calendar
        </StyleNavLink>
        <StyleNavLink to="/statistics">
          <Statistscs />
          Statistscs
        </StyleNavLink>
      </Container>
    </nav>
  );
};
