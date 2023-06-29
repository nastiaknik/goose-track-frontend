import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.1);
//   z-index: 1000;
// `;

export const MenuContent = styled.div`
  position: absolute;
  // top: 50%;
  top: 190%;
  // left: 0;
  z-index: 10000;
  right: -64px;
  width: 115px;
  height: 70px;
  padding: 12px;

  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border: var(--border-modal);
  border-radius: var(--border-radius);
  box-shadow: var(--task-modal-shadow);

  @media screen and (min-width: 768px) {
    // top: 405px;
    // right: 305px;
    left: 0;
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

  &:hover,
  &:focus {
    fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
