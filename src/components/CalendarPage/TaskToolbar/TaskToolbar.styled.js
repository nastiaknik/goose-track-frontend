import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";

export const Item = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const ArrowSvg = styled(BsArrowRightCircle)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.variableColors.text};

  &:hover,
  &:focus {
    fill: var(--accent-text-color);
  }
`;

export const PencilSvg = styled(BiPencil)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.variableColors.text};

  &:hover,
  &:focus {
    fill: var(--accent-text-color);
  }
`;

export const TrashSvg = styled(CiTrash)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.variableColors.text};

  &:hover,
  &:focus {
    fill: var(--accent-text-color);
  }
`;
