import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export const HamburgerMenu = styled(RxHamburgerMenu)`
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};

  padding: 20px;
  height: 116px;
  @media (min-width: 1024px) {
    padding-top: 44px;
    padding-bottom: 44px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.variableColors.text};
  box-shadow: 0px 9.399999618530273px 57.6875px 0px #00000009;
  display: none;

  box-shadow: 0px 47px 355px 0px #00000012;
  @media (min-width: 1024px) {
    display: block;
    margin-left: 20px;
  }
`;
export const TitleCalendar = styled.p`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--primary-text-color);
  box-shadow: 0px 9.399999618530273px 57.6875px 0px #00000009;
  display: none;

  box-shadow: 0px 47px 355px 0px #00000012;
  @media (min-width: 1024px) {
    display: block;
    margin-left: 20px;
  }
`;

export const MotivationContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 10px;
  }
`;

export const MotivationImage = styled.img`
  width: 50px;
  height: 50px;
`;
export const NameOfPage = styled.span``;
export const MotivationText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #555555;

  span {
    color: blue;
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
