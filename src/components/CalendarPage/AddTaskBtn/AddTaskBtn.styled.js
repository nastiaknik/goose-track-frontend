import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 16px 100px;
  border-radius: var(--border-radius);
  border: var(--border-add-task-btn);
  background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.variableColors.text};
  font-family: "InterSemiBold";
  font-size: 14px;
  font-weight: 600;
  min-width: 299px;
   transition: background-color var(--animation), box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color:${({theme})=>theme.variableColors.activeButtonBlue};
  }


  @media screen and (min-width: 768px) {
    min-width: 304px;
    padding: 18px 102px;
  }
`;

export const PlusSvg = styled(BiPlus)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.variableColors.text};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
