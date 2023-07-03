import styled from "styled-components";

export const ListContainer = styled.ul`
  overflow-x: auto;
  overscroll-behavior: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 0px;
  gap: 14px;
  padding-bottom: 34px;
  margin: 0;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    theme.variableColors.columnScrollbarThumbColor};
  ${({ theme }) => theme.variableColors.columnScrollbarTrackColor};

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.variableColors.columnScrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.variableColors.columnScrollbarTrackColor};
    border-radius: 12px;
  }

  @media (max-width: 1199px) {
    padding-bottom: 150px;
  }

  @media (max-width: 767px) {
    padding-bottom: 34px;
  }

  @media (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 14px;
    }
  }
`;
