import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { GrDown } from "react-icons/gr";
import DatePicker from "react-datepicker";
import { createGlobalStyle } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 40px;
  width: 100%;
  height: 100%;
  margin-top: 51px;
  padding: 40px 20px;
  background-color: var(--primary-bg-color);
  border-radius: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 40px;
    position: static;
  }

  @media (min-width: 1440px) {
    gap: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 732px;
  }

  @media (min-width: 876px) {
    justify-content: space-between;
  }
`;

export const LabelSpan = styled.span`
  margin-bottom: 8px;
  color: ${({ hasError, success }) =>
    hasError
      ? "var(--error-text-color)"
      : success
      ? "var(--correct-text-color)"
      : "var(--secondary-text-color)"};
  transition: color var(--animation);
`;

export const Label = styled.label`
  font-family: "InterRegular";
  font-size: 12px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  font-family: "InterSemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  border: ${({ hasError, success }) => {
    if (hasError) {
      return "var(--border-auth-error)";
    }
    if (success) {
      return "var(--border-auth-correct)";
    }
    return "var(--border)";
  }};
  border-radius: var(--border-radius);
  height: 42px;
  padding: 12px 12px 12px 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-bg-color);
  transition: border var(--animation);

  &::placeholder {
    font-family: "InterRegular";
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);
  }

  @media (max-width: 374px) {
    max-width: 298px;
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding: 14px 14px 14px 18px;
    font-size: 16px;
  }

  &:hover,
  :focus {
    border: ${({ hasError, success }) => {
      if (hasError) {
        return "var(--border-auth-error)";
      }
      if (success) {
        return "var(--border-auth-correct)";
      }
      return "var(--border-input-hover)";
    }};
  }
`;

export const AvatarBlock = styled.div`
  margin-top: -76px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputAvatar = styled.input`
  display: none;
  width: 200px;
  height: 150px;
`;

export const DefaultIcon = styled(AiOutlineUser)`
  width: 50%;
  height: 50%;
  position: relative;
  top: 25%;
  left: 25%;
  object-fit: cover;
  font-size: 38px;
  color: var(--auth-bg-color);
`;

export const LabelImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const LabelAvatar = styled.label`
  display: block;
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--accent-bg-color);
  width: 72px;
  height: 72px;
  background-color: var(--avatar-bg-color);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AddAvatarBtn = styled.div`
  width: 14px;
  height: 14px;
  background-color: var(--accent-bg-color);
  border-radius: 50%;
  color: var(--light-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  bottom: -4px;
  right: 15px;

  @media (min-width: 768px) {
    bottom: -6px;
    right: 24px;
    width: 24px;
    height: 24px;
  }

  transition: background-color var(--animation);
  &:hover,
  :focus {
    background-color: var(--hover-btn-bg-color);
  }
`;

export const PlusIcon = styled(AiOutlinePlus)`
  color: var(--light-text-color);
  background-color: var(--accent-bg-color);
  width: 8px;
  height: 8px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ArrowIcon = styled(GrDown)`
  color: var(--primary-text-color);
  width: 12px;
  height: 12px;
`;

export const Button = styled.button`
  font-family: "InterRegular";
  display: block;
  width: 100%;
  max-width: 195px;
  background-color: var(--accent-bg-color);
  border-radius: 16px;
  color: var(--light-text-color);
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;

  &[disabled] {
    background-color: #84828a;
    opacity: 0.5;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 15px;
    max-width: 262px;
    max-height: 48px;
  }

  transition: background-color var(--animation), box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-btn-bg-color);
  }
`;

export const TitleAvatar = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  margin: 14px 0 0 0;
  text-align: center;
  color: var(--primary-text-color);

  @media (min-width: 768px) {
    margin: 20px 0 0 0;
  }
`;

export const TextAvatar = styled.p`
  font-family: "InterSemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  margin-top: 4px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const Errors = styled.div`
  color: var(--error-text-color);
  font-size: 12px;
  height: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Success = styled.div`
  color: var(--correct-text-color);
  font-size: 12px;
  height: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(875%, 95%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-bg-color);
  z-index: 1;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    transform: translate(1045%, 108%);
  }
`;

export const BirthdayContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const DatePickerStyles = createGlobalStyle`
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
    border-bottom: var(--border);
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
    font-family: "InterRegular",;
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

  .react-datepicker__day:hover, .react-datepicker__day--keyboard-selected {
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

  .react-datepicker__triangle, .react-datepicker__aria-live {
    display: none;
  }

`;

export const StyledDatePicker = styled(DatePicker)`
  position: relative;
  width: 299px;
  height: 346px;
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
    line-height: 1.12;
    padding: 14px 14px 14px 18px;
  }
  transition: border var(--animation);
  &:hover,
  :focus {
    border: ${(props) =>
      props.hasError
        ? "var(--border-auth-error)"
        : "var(--border-auth-correct)"};
  }
`;
