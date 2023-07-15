import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn";
import { selectDayTasks } from "redux/tasks/selectors";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  HeaderContainer,
  ContentContainer,
  Title,
  HamburgerMenu,
} from "./Header.styled";
import { CalendarTitle } from "./CalendarTitle/CalendarTitle";
import UserInfo from "../UserInfo/UserInfo";
import LangSwitcher from "components/LangSwitcher/LangSwitcher";

export const Header = ({ toggleMenu }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [page, setPage] = useState("");

  const dayTasks = useSelector(selectDayTasks);

  const hasToDoOrInProgress = dayTasks.some(
    (item) => item.category === "To do" || item.category === "In progress"
  );

  useEffect(() => {
    const calendarPage =
      location.pathname === "/calendar" ||
      location.pathname.startsWith("/calendar/day");

    if (location.pathname === "/account") {
      setPage(t("User Profile"));
      return;
    } else if (calendarPage) {
      setPage(t("Calendar"));
      return;
    } else if (location.pathname === "/statistics") {
      setPage(t("Statistics"));
      return;
    }
  }, [setPage, page, location.pathname, t]);

  return (
    <HeaderContainer>
      <HamburgerMenu onClick={toggleMenu} />
      {dayTasks.length !== 0 &&
      hasToDoOrInProgress &&
      location.pathname.startsWith("/calendar/day") ? (
        <CalendarTitle />
      ) : (
        <Title>{page}</Title>
      )}
      <ContentContainer>
        <LangSwitcher />
        <AddFeedbackBtn />
        <UserInfo />
      </ContentContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
