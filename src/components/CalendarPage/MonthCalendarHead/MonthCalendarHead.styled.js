import styled from "styled-components";

export const Days = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.variableColors.borderСalendarColor};
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.variableColors.backgroundCalendar};

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    padding: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;
  }
`;

export const DaysText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
`;

export const DaysTextWeekend = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  color: ${({ theme }) => theme.variableColors.weekendTextColor};
`;
