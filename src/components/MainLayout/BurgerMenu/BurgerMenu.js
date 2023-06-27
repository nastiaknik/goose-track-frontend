import logo1x from "assets/images/logo_goose-min.png";
import logo2x from "assets/images/logo_goose@2x-min.png";

import { StyledLogoImg, ButtonClose, DivBurger, Span, Div, SpanSecond, GrCloseBtn } from "./BurgerMenu.styled";
export const BurgerMenu = ({ toggleMenu }) => {
  return (
    <DivBurger>
      <Div>
        <StyledLogoImg src={`${logo1x}`} srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Logo" />
        <Span>
          G<SpanSecond>oo</SpanSecond>seTrack
        </Span>
      </Div>
      <ButtonClose type="button" onClick={toggleMenu}>
        <GrCloseBtn />
      </ButtonClose>
    </DivBurger>
  );
};
