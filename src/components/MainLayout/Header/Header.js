import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn";

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
      {page === "Calendar" ? <CalendarTitle /> : <Title>{page}</Title>}
      <ContentContainer>
        <AddFeedbackBtn />
        <NavLink to="/account" onClick={toggleMenu}>
          <UserInfo />
        </NavLink>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
