import logo1x from "assets/images/logo_goose-min.png";
import logo2x from "assets/images/logo_goose@2x-min.png";

import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import LangSwitcher from "components/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

import {
  Container,
  LogoDiv,
  LogoH1,
  LogoSpan,
  LogoImg,
  LinksDiv,
  LinkLogin,
  LinkSingup,
  Wrapper,
  LangContainer,
} from "./AuthSection.styled";

export const AuthSection = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LogoDiv>
        <Wrapper>
          <Link to="/">
            <LogoImg
              src={`${logo1x}`}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="Logo"
            />
          </Link>
          <LangContainer>
            <LangSwitcher />
          </LangContainer>
        </Wrapper>
        <LogoH1>
          G<LogoSpan>oo</LogoSpan>seTrack
        </LogoH1>
      </LogoDiv>
      <LinksDiv>
        <LinkLogin to="/login">
          {t("Log in")} <FiLogIn size={18} />
        </LinkLogin>
        <LinkSingup to="/register">{t("Sign up")}</LinkSingup>
      </LinksDiv>
    </Container>
  );
};
