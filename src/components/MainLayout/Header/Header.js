import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn";
import { selectDayTasks } from "redux/tasks/selectors";
import { useSelector } from "react-redux";

import {
  HeaderContainer,
  ContentContainer,
  Title,
  HamburgerMenu,
} from "./Header.styled";
import { CalendarTitle } from "./CalendarTitle/CalendarTitle";
import UserInfo from "../UserInfo/UserInfo";

export const Header = ({ toggleMenu }) => {
  const location = useLocation();
  const [page, setPage] = useState("");

  const dayTasks = useSelector(selectDayTasks);

  useEffect(() => {
    const calendarPage =
      location.pathname === "/calendar" ||
      location.pathname.startsWith("/calendar/day");

    if (location.pathname === "/account") {
      setPage("User Menu");
      return;
    } else if (calendarPage) {
      setPage("Calendar");
      return;
    } else if (location.pathname === "/statistics") {
      setPage("Statistics");
      return;
    }
  }, [setPage, page, location.pathname]);

  return (
    <HeaderContainer>
      <HamburgerMenu onClick={toggleMenu} />
      {dayTasks.length !== 0 ? <CalendarTitle /> : <Title>{page}</Title>}
      <ContentContainer>
        <AddFeedbackBtn />
        <UserInfo />
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
