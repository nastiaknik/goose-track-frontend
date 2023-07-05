import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsBarChart } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";

import { TbUserCheck } from "react-icons/tb";
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const User = styled(TbUserCheck)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const Calendar = styled(LuCalendarCheck2)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const Statistics = styled(BsBarChart)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const StyleNavLink = styled(NavLink)`
  width: 100%;
  height: 40px;
  font-family: var(--primary-font-family);
  color: ${({ theme }) => theme.variableColors.textNav};
  display: flex;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding-left: 20px;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 375px) {
    width: 185px;
    height: 40px;
  }
  @media (min-width: 768px) {
    width: 225px;
    height: 56px;
  }
  @media (min-width: 1024px) {
    width: 241px;
    height: 56px;
    gap: 10px;
  }
  &.active {
    background-color: ${({ theme }) => theme.variableColors.activeButtonBlue};
    border-radius: 8px;
    color: ${({ theme }) => theme.variableColors.textColorButton};
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.variableColors.activeButtonBlue};
    border-radius: 8px;
    color: ${({ theme }) => theme.variableColors.textColorButton};

    transition: background-color var(--transition-duration) ease;
  }
`;
export const Span = styled.span`
  font-weight: 600;
  font-family: "InterRegular";
  font-size: 14px;
  color: ${({ theme }) => theme.variableColors.textUserPanel};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
