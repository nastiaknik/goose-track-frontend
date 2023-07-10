import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

export const MenuContent = styled.div`
  position: absolute;
  top: 12px;
  right: -64px;
  width: 115px;
  height: 70px;
  padding: 12px;

  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border: ${({ theme }) => theme.variableColors.borderCalendar};
  border-radius: var(--border-radius);
  box-shadow: var(--task-modal-shadow);

  @media screen and (min-width: 768px) {
    top: 10px;
    left: -8px;
    width: 147px;
    height: 90px;
    padding: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.variableColors.text};
  font-family: "InterMedium";
  font-size: 12px;
  font-weight: 500;

  padding: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--accent-text-color);
    transition: color var(--animation);
  }

  &:hover > svg,
  &:focus > svg {
    fill: currentColor;
    transition: fill var(--animation);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ArrowSvg = styled(BsArrowRightCircle)`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  fill: ${({ theme }) => theme.variableColors.text};

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
