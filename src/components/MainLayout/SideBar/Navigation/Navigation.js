import {
  Container,
  Nav,
  StyleNavLink,
  Statistics,
  Span,
  Calendar,
  User,
} from "./NavigationNav.styled";
import { useTranslation } from "react-i18next";

export const Navigation = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Span>{t("User Panel")}</Span>
      <Container>
        <StyleNavLink to="/account" onClick={toggleMenu}>
          <User />
          {t("My account")}
        </StyleNavLink>
        <StyleNavLink to="/calendar" onClick={toggleMenu}>
          <Calendar />
          {t("Calendar")}
        </StyleNavLink>
        <StyleNavLink to="/statistics" onClick={toggleMenu}>
          <Statistics />
          {t("Statistics")}
        </StyleNavLink>
      </Container>
    </Nav>
  );
};
