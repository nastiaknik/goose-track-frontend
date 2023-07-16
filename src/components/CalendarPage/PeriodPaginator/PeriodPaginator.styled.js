import styled from "styled-components";
import { ReactComponent as IconArrowRight } from "../../../icons/icon-arrow-right.svg";
import { ReactComponent as IconArrowLeft } from "../../../icons/icon-arrow-left.svg";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

const ButtonBase = styled.button`
  width: 38px;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  stroke: black;
  border: 1px solid rgba(220, 227, 229, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonLeft = styled(ButtonBase)`
  border-radius: 8px 0 0 8px;
`;

export const ButtonRight = styled(ButtonBase)`
  border-radius: 0 8px 8px 0;
`;

export const IconRight = styled(IconArrowRight)`
  stroke: ${({ theme }) => theme.variableColors.arrowColor};
`;

export const IconRightActive = styled(IconArrowRight)`
  stroke: ${({ theme }) => theme.variableColors.activeArrowColor};
`;

export const IconLeft = styled(IconArrowLeft)`
  stroke: ${({ theme }) => theme.variableColors.arrowColor};
`;

export const IconLeftActive = styled(IconArrowLeft)`
  stroke: ${({ theme }) => theme.variableColors.activeArrowColor};
`;
