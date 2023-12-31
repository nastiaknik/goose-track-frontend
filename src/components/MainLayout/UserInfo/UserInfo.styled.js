import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 376px) {
    gap: 14px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 376px) {
    gap: 14px;
  }
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.variableColors.text};
  font-family: InterBold;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #3e85f3;
  color: var(--light-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--accent-bg-color);
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
