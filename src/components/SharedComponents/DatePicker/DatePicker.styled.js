import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerWrapper = styled.div`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
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
  width: 299px;
  height: 42px;
  border: ${({ hasError, success }) => {
    if (hasError) {
      return "var(--border-auth-error)";
    }
    if (success) {
      return "var(--border-auth-correct)";
    }
    return "var(--border)";
  }};
  border-radius: 8px;
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  padding: 12px 12px 12px 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-bg-color);

  &:focus-visible {
    outline: none;
    border: var(--border);
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.2;
    padding: 14px 14px 14px 18px;
  }
  transition: border var(--animation);
  &:hover,
  :focus {
    border: ${({ hasError, success }) => {
      if (hasError) {
        return "var(--border-auth-error)";
      }
      if (success) {
        return "var(--border-auth-correct)";
      }
      return "var(--border)";
    }};
  }
`;
