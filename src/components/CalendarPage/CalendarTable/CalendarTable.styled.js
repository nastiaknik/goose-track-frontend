import styled from "styled-components";

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.variableColors.borderСalendarColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.variableColors.backgroundCalendar};
  grid-auto-rows: minmax(94px, auto);
  grid-gap: 1px;

  @media screen and (min-width: 768px) {
    grid-auto-rows: minmax(144px, auto);
  }

  @media screen and (min-width: 1280px) {
    grid-auto-rows: minmax(125px, auto);
  }
`;

export const Cell = styled.div`
  border: 1px solid ${({ theme }) => theme.variableColors.borderСalendarColor};
  cursor: pointer;
  padding: 2px;
  transition: transform 0.2s linear;

  @media screen and (min-width: 768px) {
    padding: 4px;
  }

  @media screen and (min-width: 1280px) {
    padding: 8px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const DayNumber = styled.p`
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 22px;
  margin-left: auto;
  border-radius: 8px;
  padding: 0;
  margin-top: 8px;
  margin-right: 4px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    width: 27px;
    height: 26px;
    margin-top: 14px;
    margin-right: 14px;
    margin-bottom: 14px;
  }
`;

export const DayWeekend = styled(DayNumber)`
  color: ${({ theme }) => theme.variableColors.weekendTextColor};
`;

export const DayNumberSpecial = styled(DayNumber)`
  opacity: 50%;
`;

export const DayToday = styled.p`
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.variableColors.weekendTextColor};
  color: ${({ theme }) => theme.variableColors.textButton};
  width: 20px;
  height: 22px;
  margin-left: auto;
  border-radius: 8px;
  padding: 0;
  margin-top: 8px;
  margin-right: 4px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    width: 27px;
    height: 26px;
    margin-top: 14px;
    margin-right: 14px;
    margin-bottom: 14px;
  }
`;

export const TaskWrapper = styled.ul`
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2px;
`;

export const TaskTitle = styled.p`
  font-size: 10px;
  margin-bottom: 1px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TaskLow = styled(TaskTitle)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorLowTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorLowTask};
`;

export const TaskMedium = styled(TaskTitle)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorMediumTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorMediumTask};
`;

export const TaskHigh = styled(TaskTitle)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorHighTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorHighTask};
`;

export const TaskPoint = styled.div`
  width: 4px;
  height: 4px;
  margin-right: 2px;
  display: inline-block;

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const TaskPointLow = styled(TaskPoint)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorLowTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorLowTask};
`;

export const TaskPointMedium = styled(TaskPoint)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorMediumTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorMediumTask};
`;

export const TaskPointHigh = styled(TaskPoint)`
  padding: 4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.variableColors.textColorHighTask};
  background-color: ${({ theme }) => theme.variableColors.bgColorHighTask};
`;
