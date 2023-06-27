import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedDate = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
  margin-top: 6px;
  padding: 4px 6px;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    margin-top: 4px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const SelectedDay = styled.span`
  background: ${({ theme }) => theme.variableColors.backgroundButton};
  border-radius: 6px;
  padding: 4px 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  margin-top: 6px;
  color: ${({ theme }) => theme.variableColors.textButton};

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    margin-top: 4px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const DayOfWeek = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.12;
  text-transform: uppercase;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};

  @media screen and (min-width: 768px) {
    line-height: 1.29;
  }
`;
