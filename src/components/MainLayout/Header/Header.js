import React from "react";
import { useLocation } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import {
  HeaderContainer,
  ContentContainer,
  Title,
  //   MotivationContainer,
  //   MotivationImage,
  //   MotivationText,
} from "./Header.styled";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import AddFeedbackBtn from "../AddFeedbackBtn/AddFeedbackBtn";

// 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
//??? 3. На сторінці з календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
//  /calendar/day/:currentDay

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Title>
        {location.pathname === "/account"
          ? "User Profile"
          : location.pathname === "/calendar" || location.pathname.startsWith("/calendar/day")
          ? "Calendar"
          : location.pathname === "/statistics"
          ? "Statistics"
          : "User Profile"}
      </Title>
      {/* цей дів повинен рендеритись якщо {location.pathname.startsWith("/calendar/day")} && є невиконані таскиза цей день (в Todo аба в In progress) */}
      {/* <MotivationContainer>
          <MotivationImage  src="" alt="Гусак-мотивак" />
          <MotivationText>
            <span>Let go</span>of the past and focus on the present!
          </MotivationText>
        </MotivationContainer> */}

      <ContentContainer>
        <AddFeedbackBtn />
        <ThemeToggler />
        <UserInfo />
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
