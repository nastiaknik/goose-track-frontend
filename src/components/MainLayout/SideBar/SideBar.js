import { TbUserCheck } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";
import { Container, StyleNavLink, Span } from "./SideBar.styled";
export const Navigation = () => {
  return (
    <nav>
      <Container>
        <Span>User Panel</Span>
        <StyleNavLink to="/account">
          <TbUserCheck size={20} />
          My account
        </StyleNavLink>
        <StyleNavLink to="/calendar">
          <LuCalendarCheck2 size={20} />
          Calendar
        </StyleNavLink>
        <StyleNavLink to="/statistics">
          <BsBarChart size={20} />
          Statistscs
        </StyleNavLink>
      </Container>
    </nav>
  );
};
