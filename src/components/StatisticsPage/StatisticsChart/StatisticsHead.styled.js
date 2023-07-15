import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const LegendList = styled.ul`
  font-family: "InterRegular";
  font-weight: 400;
  display: flex;
  gap: 30px;
  color: ${({ theme }) => theme.variableColors.text};
  padding-inline-start: 0px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ChartHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* max-width: 307px; */
  justify-content: space-between;
  margin-bottom: 40px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 860px;
  }

  @media (min-width: 1440px) {
    max-width: 860px;
  }
`;

export const PrevDayButton = styled.button`
  width: 38px;
  height: 34px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  }
`;

export const NextDayButton = styled.button`
  width: 38px;
  height: 34px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767.9px) {
    width: 100%;
  }
`;

export const ButtDiv = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    border: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    font-family: "InterRegular";
    padding: 12px;
    border-radius: 16px;
    background-color: var(--accent-bg-color);
    @media (min-width: 768px) {
      padding: 18px;
      transform: translate(-8%, 0%);
    }
  }

  .react-datepicker__month-container {
    float: inherit;
    box-sizing: inherit;
  }

  .react-datepicker__header {
    font-family: "InterRegular";
    text-align: center;
    background-color: var(--accent-bg-color);
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    position: relative;
  }

  .react-datepicker__day-names {
    display: flex;
    border-bottom: 1px solid #ffffff33;
    padding: 12px 0;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 16px 0;
    }
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 16px;
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-family: "InterSemiBold";
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--light-text-color);

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .react-datepicker__day-name {
    font-family: "InterSemiBold";
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    color: var(--light-text-color);

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .react-datepicker__navigation {
    margin-top: 7px;

    @media (min-width: 768px) {
      margin-top: 17px;
    }
  }

  .react-datepicker__navigation--previous {
    left: 7px;

    @media (min-width: 768px) {
      left: 17px;
    }
  }

  .react-datepicker__navigation--next {
    right: 7px;

    @media (min-width: 768px) {
      right: 17px;
    }
  }

  .react-datepicker__navigation-icon::before {
    display: inline-block;
    border-color: var(--light-text-color);
    transition: border-color var(--animation);

    @media (max-width: 767px) {
      border-width: 2px 2px 0 0;
      height: 9px;
      width: 9px;
    }

    @media (min-width: 768px) {
      margin-top: -2px;
      height: 12px;
      width: 12px;
    }
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: var(--light-text-color);
  }

  .react-datepicker__week {
    display: flex;
    gap: 7px;

    color: var(--light-text-color);
    justify-content: space-between;
  }

  .react-datepicker__day {
    font-family: "InterRegular";
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    color: var(--light-text-color);
    width: 32px;
    height: 32px;
    margin: 0;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    transition: color var(--animation), background-color var(--animation);

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
  }

  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;

    @media (min-width: 768px) {
      padding-top: 20px;
    }
  }

  .react-datepicker__day--selected {
    background-color: var(--light-text-color);
    color: var(--accent-bg-color);
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: var(--primary-bg-color);
  }

  .react-datepicker__day:hover,
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: var(--primary-bg-color);
    color: var(--accent-bg-color);
    cursor: pointer;
  }

  .react-datepicker__day--outside-month {
    color: var(--accent-bg-color);
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle,
  .react-datepicker__aria-live {
    display: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  position: relative;
  width: 121px;
  height: 30px;
  border-radius: 8px;
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  padding: 6px 12px 6px 12px;
  box-sizing: border-box;
  color: white;
  background-color: #3e85f3;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 145px;
    height: 34px;
    font-size: 16px;
    line-height: 1.2;
    padding: 8px 12px 8px 12px;
  }

  :hover,
  :focus {
    background-color: var(--hover-btn-bg-color);
  }
  transition: background-color var(--animation);
`;

export const LeftArrow = styled(MdOutlineKeyboardArrowLeft)`
  fill: ${({ theme }) => theme.variableColors.arrowColor};
`;

export const RightArrow = styled(MdOutlineKeyboardArrowRight)`
  fill: ${({ theme }) => theme.variableColors.arrowColor};
`;
