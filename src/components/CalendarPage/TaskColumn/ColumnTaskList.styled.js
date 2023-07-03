import styled from "styled-components";

export const TasksList = styled.ul`
  display: flex;
  overflow-y: auto;
  overscroll-behavior: auto;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  gap: 14px;

  padding-right: 6px;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.variableColors.scrollbarThumbColor};
  ${({ theme }) => theme.variableColors.scrollbarTrackColor};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.variableColors.scrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.variableColors.scrollbarTrackColor};
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    gap: 18px;
    padding-right: 7px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`;
