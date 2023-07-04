import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export const HamburgerMenu = styled(RxHamburgerMenu)`
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.variableColors.text};
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 1439px) {
    display: none;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};
  padding-top: 24px;
  padding-bottom: 64px;

  @media (min-width: 1024px) {
    padding-top: 0px;
    padding-bottom: 32px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  @media (min-width: 376px) {
    gap: 24px;
  }
`;

export const Title = styled.p`
  font-family: InterBold;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.variableColors.text};
  display: none;
  box-shadow: 0px 47px 355px 0px #00000012;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const ThemeTogglerText = styled.p`
  margin-right: 14px;
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
