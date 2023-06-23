import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: #3e85f3;
  color: #fff;

  padding: 88px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 20px;
  }
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  flex: 2;
  @media screen and (min-width: 768px) {
    flex: 0;
  }
`;

export const StyledLogoImg = styled.img`
  display: block;
  width: 142px;
  height: 142px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const StyledLogoH1 = styled.h1`
  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-family: "CoolveticaRegular", sans-serif;
  font-size: 44px;
  line-height: 48px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 150px;
  }
`;

export const StyledLogoSpan = styled.span`
  font-family: "CoolveticaRegularItalic", sans-serif;
`;

export const StyledLinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex: 1.5;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0;
    gap: 24px;
  }
`;

export const StyledLinkLogin = styled(Link)`
  overflow: hidden;
  color: #3e85f3;
  font-family: "InterSemiBold";
  font-size: 14px;
  font-weight: 600;
  line-height: 129%;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: #fff;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  padding: 14px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #2b78ef;
  }
`;

export const StyledLinkSingup = styled(Link)`
  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-family: "InterSemiBold";
  font-size: 12px;
  font-weight: 600;
  line-height: 117%;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  padding: 12px 24px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 129%;
  }
`;
