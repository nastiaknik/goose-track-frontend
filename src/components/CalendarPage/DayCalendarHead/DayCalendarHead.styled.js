import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 19px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.variableColors.borderСalendarColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.variableColors.backgroundCalendar};
  margin-bottom: 14px;
  padding: 14px 19px 14px 19px;

  @media screen and (min-width: 768px) {
    padding: 10px 32px 10px 32px;
    gap: 69px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 46px 10px 46px;
    gap: 100px;
    margin-bottom: 16px;
  }
`;

export const Item = styled.li`
  margin: 0;
  cursor: pointer;
`;
