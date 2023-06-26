import styled from "styled-components";
import { Link } from "react-router-dom";

export const Calendar = styled.ul.attrs((props) => ({
  style: {
    height: props.calendarHeight,
    gridAutoRows: `minmax(${props.minGridRowsHeight}, 1fr)`,
  },
}))`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background: var(--primary-background-color);
  border-radius: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  color: var(--calendar-digit-color);
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const AllDays = styled.li`
  position: relative;
  border: var(--border-calendar);

  @media (min-width: 768px) {
    border: var(--border);
  }
`;

export const CurrentMonthDays = styled(AllDays)`
  transition: background-color var(--animation), box-shadow var(--animation),
    transform var(--animation), box-shadow var(--animation),
    box-shadow var(--animation), box-shadow var(--animation);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    transform: scale(1.05);
    background-color: var(--primary-background-color);
    z-index: 10;
  }
`;

export const OtherMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: none;
`;
export const CurrentMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;
