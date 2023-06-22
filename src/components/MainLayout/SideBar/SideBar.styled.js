import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StyleNavLink = styled(NavLink)`
  @media (min-width: 325px) {
  }
  width: 100%;
  height: 56px;
  background-color: gray;
  display: flex;
  font-family: "InterRegular";
  justify-content: center;
  align-items: center;
  font-family: inter;
  color: rgba(52, 52, 52, 0.5);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
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
`;
