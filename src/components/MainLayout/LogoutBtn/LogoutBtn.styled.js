import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

export const IconLogOut = styled(FiLogOut)`
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const Button = styled.button`
  bottom: 24px;
  left: 20px;
  display: flex;
  font-family: "InterRegular";
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  gap: 11px;
  min-height: 46px;
  min-width: 131px;
  width: fit-content;
  padding: 0px 23px;
  margin-top: 24px;
  color: white;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  background-color: rgba(62, 133, 243, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(43, 120, 239, 1);
    transition: background-color var(--transition-duration) ease;
  }

  @media (min-width: 768px) {
    height: 56px;
    font-size: 18px;
    left: 32px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    bottom: 24px;
    left: 24px;
  }
`;
