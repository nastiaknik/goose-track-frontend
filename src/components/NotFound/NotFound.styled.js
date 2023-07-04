import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 47px;
  padding-right: 47px;
  margin: 0 auto;
  width: 100%;
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};
  text-align: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding-left: 132px;
    padding-right: 132px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 261px;
    padding-right: 261px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 469px;
    padding-right: 469px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const StyledPicture = styled.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`;

export const Number = styled.span`
  color: var(--accent-text-color);
  font-size: 100px;
  font-family: "InterBold";
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  margin: 0 auto;
  color: var(--review-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-family: "InterMedium";
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--accent-text-color);
  text-decoration-line: underline;
  transition: color var(--animation);

  :hover,
  :focus {
    color: var(--heading-text-color);
  }
`;
