import logo1x from "assets/images/logo_goose-min.png";
import logo2x from "assets/images/logo_goose@2x-min.png";

import { FiLogIn } from "react-icons/fi";

import {
  Container,
  StyledLogoDiv,
  StyledLogoH1,
  StyledLogoSpan,
  StyledLogoImg,
  StyledLinksDiv,
  StyledLinkLogin,
  StyledLinkSingup,
} from "./AuthSection.styled";

export const AuthSection = () => {
  return (
    <Container>
      <StyledLogoDiv>
        <StyledLogoImg
          src={`${logo1x}`}
          srcSet={`${logo1x} 1x, ${logo2x} 2x`}
          alt="Logo"
        />
        <StyledLogoH1>
          G<StyledLogoSpan>oo</StyledLogoSpan>seTrack
        </StyledLogoH1>
      </StyledLogoDiv>

      <StyledLinksDiv>
        <StyledLinkLogin to="/login">
          Log in <FiLogIn />
        </StyledLinkLogin>
        <StyledLinkSingup to="/register">Sign up</StyledLinkSingup>
      </StyledLinksDiv>
    </Container>
  );
};
