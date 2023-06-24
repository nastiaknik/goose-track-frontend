import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsBarChart } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";

import { TbUserCheck } from "react-icons/tb";

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
export const Statistscs = styled(BsBarChart)`
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
  gap: 16px;
`;
export const StyleNavLink = styled(NavLink)`
  width: 100%;
  height: 40px;
  font-family: var(--primary-font-family);
  color: rgba(52, 52, 52, 0.5);
  display: flex;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding-left: 32px;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 375px) {
    width: 185px;
  }

  &:hover,
  &:focus {
    background-color: rgba(227, 243, 255, 1);
    border-radius: 8px;
    color: rgba(62, 133, 243, 1);
  }
`;
export const Span = styled.span`
  font-weight: 600;
  font-family: "InterRegular";
  font-size: 14px;
  color: rgba(52, 52, 52, 0.5);
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
