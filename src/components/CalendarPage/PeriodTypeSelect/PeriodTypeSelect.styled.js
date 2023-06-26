import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const NavLinkBase = styled(NavLink)`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  padding: 8px 25px;
  align-items: center;
  border-radius: 0px 8px 8px 0px;

  &:hover {
    color: ${({ theme }) => theme.variableColors.hoverTextBtn};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const NavLinkDay = styled(NavLinkBase)`
  color: ${({ theme }) => theme.variableColors.activeTextColorBtn};
  background-color: ${({ theme }) => theme.variableColors.buttonBlue};
`;

export const ActiveLinkDay = styled(NavLinkBase)`
  color: ${({ theme }) => theme.variableColors.activeTextColorBtn};
  background-color: ${({ theme }) => theme.variableColors.activeButtonBlue};
`;

export const NavLinkMonth = styled(NavLinkBase)`
  color: ${({ theme }) => theme.variableColors.activeTextColorBtn};
  background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  padding: 8px 16px;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;
`;

export const ActiveLinkMonth = styled(NavLinkBase)`
  color: ${({ theme }) => theme.variableColors.activeTextColorBtn};
  background-color: ${({ theme }) => theme.variableColors.activeButtonBlue};
  padding: 8px 16px;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;
`;
