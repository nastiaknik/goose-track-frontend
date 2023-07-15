import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 420px;
  height: 100vh;
  padding-inline: 20px;
  padding-bottom: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--accent-bg-color);

  @media screen and (min-width: 768px) {
    min-height: 460px;
    gap: 40px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  flex: 2;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 0;
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const LogoH1 = styled.h1`
  color: var(--light-text-color);
  text-shadow: var(--logo-text-shadow);
  font-family: "CoolveticaRegular", sans-serif;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const LogoSpan = styled.span`
  font-family: "CoolveticaRegularItalic", sans-serif;
`;

export const LinksDiv = styled.div`
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

export const LinkLogin = styled(Link)`
  color: var(--accent-text-color);
  font-family: "InterSemiBold";
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: var(--primary-bg-color);
  box-shadow: var(--shadow-logout-btn);
  border: 1px solid transparent;
  padding: 14px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: color var(--animation), background-color var(--animation),
    border-color var(--animation), box-shadow var(--animation);

  :hover,
  :focus {
    color: var(--light-text-color);
    background-color: transparent;
    border-color: var(--primary-bg-color);
    box-shadow: var(--shadow-logout-btn-hover);
  }
`;

export const LinkSingup = styled(Link)`
  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-family: "InterSemiBold";
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 14px 32px;

  transition: color var(--animation), background-color var(--animation),
    border-color var(--animation), box-shadow var(--animation);

  :hover,
  :focus {
    color: var(--light-text-color);
    background-color: transparent;
    border-color: var(--primary-bg-color);
    box-shadow: var(--shadow-logout-btn-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > a {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const LangContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 25px;
    padding-right: 20px;
  }
`;