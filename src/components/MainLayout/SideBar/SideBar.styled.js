import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StyleNavLink = styled(NavLink)`
  width: 100%;
  height: 56px;
  font-family: var(--primary-font-family);
  color: rgba(52, 52, 52, 0.5);
  display: flex;
  gap: 13px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding-left: 23px;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 375px) {
    width: 225px;
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
