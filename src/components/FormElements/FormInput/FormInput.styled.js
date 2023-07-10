import styled from "styled-components";

const validateColor = (error, isSubmited, color) => {
  if (!isSubmited) {
    return color;
  } else {
    return error ? "var(--error-text-color)" : "var(--correct-text-color)";
  }
};

const validateBgColor = (auth, theme) =>
  auth
    ? `var(--primary-bg-color)`
    : `${theme.variableColors.secondaryBackground}`;

const validateLabelColor = (auth, theme) =>
  auth
    ? `var(--primary-text-color)`
    : `${theme.variableColors.labelUserFormTextColor}`;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;

  font-size: 12px;
  color: ${({ error, isSubmited, theme, auth }) =>
    validateColor(error, isSubmited, validateLabelColor(auth, theme))};
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

export const StyledInput = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background-color: ${({ auth, theme }) => validateBgColor(auth, theme)};
  outline: 2px solid transparent;
  outline-color: ${({ error, isSubmited }) =>
    validateColor(error, isSubmited, "transparent")};
  transition: outline var(--animation);

  color: ${({ theme, auth }) => validateLabelColor(auth, theme)};
  font-size: 14px;
  line-height: 18px;

  ::placeholder {
    color: var(--auth-placeholder-color);
  }

  :hover,
  :focus {
    outline: 2px solid var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
  }

  &[type="password"] {
    ::placeholder {
      font-family: var(--primary-font);
      letter-spacing: 0;
    }

    :not(:placeholder-shown) {
      font-family: Verdana, sans-serif;
      letter-spacing: 1px;
    }
  }
`;

export const StyledValidation = styled.p`
  margin-top: ${({ type }) => (type === "password" ? "18px" : "8px")};
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.16;
  color: ${({ error, isSubmited }) =>
    validateColor(error, isSubmited, "var(--primary-text-color)")};

  @media screen and (min-width: 768px) {
    margin-left: 18px;
  }
`;
