import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const validateColor = (error, isSubmited, color) => {
  if (!isSubmited) {
    return color;
  } else {
    return error ? "var(--error-text-color)" : "var(--correct-text-color)";
  }
};

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;

  font-size: 12px;
  color: ${({ error, isSubmited, theme }) =>
    validateColor(
      error,
      isSubmited,
      theme.variableColors.labelUserFormTextColor
    )};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const InputThumb = styled.span`
  position: absolute;
  top: 23px;
  left: 0;

  display: inline-block;
  margin: 0;
  width: 100%;
  height: 46px;

  @media screen and (min-width: 768px) {
    top: 25px;
    height: 54px;
  }

  > svg {
    position: absolute;
    bottom: 14px;
    right: 8px;
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      bottom: 18px;
    }
  }

  > button {
    position: absolute;
    bottom: 0;
    right: 24px;

    width: 46px;
    height: 46px;
    background-color: transparent;
    color: var(--auth-placeholder-color);

    @media screen and (min-width: 768px) {
      width: 54px;
      height: 54px;
    }

    > svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const StyledValidation = styled.p`
  margin-top: 8px;
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.16;
  color: ${({ error, isSubmited }) =>
    validateColor(error, isSubmited, "var(--primary-text-color)")};

  @media screen and (min-width: 768px) {
    margin-left: 18px;
  }
`;

export const ArrowIcon = styled(FaChevronDown)`
  color: ${({ theme }) => theme.variableColors.arrowIconColor};
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 30px;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 15px;
    top: 40px;
  }
`;
