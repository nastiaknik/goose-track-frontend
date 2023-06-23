import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 40px;
  border-radius: 8px;
  background-color: var(--primary-bg-color);

  font-family: var(--primary-font);
  font-weight: 600;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
  color: var(--accent-text-color);
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-top: 18px;

  font-size: 14px;
  color: var(--primary-text-color);

  :nth-child(2) {
    margin-top: 40px;
  }
`;

export const StyledLabelPassword = styled(StyledLabel)`
  position: relative;

  > button {
    position: absolute;
    bottom: 0;
    right: 8px;

    width: 54px;
    height: 54px;
    background-color: transparent;
    color: var(--auth-placeholder-color);

    > svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: var(--primary-bg-color);
  outline: 2px solid transparent;
  transition: outline var(--animation);

  color: var(--primary-text-color);
  font-size: 16px;
  line-height: 18px;

  ::placeholder {
    color: var(--auth-placeholder-color);
  }

  :hover,
  :focus {
    outline: 2px solid var(--primary-text-color);
  }

  &[type="password"] {
    font-family: Verdana, sans-serif;
    letter-spacing: 1px;

    ::placeholder {
      font-family: var(--primary-font);
      letter-spacing: 0;
    }
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  width: 100%;
  margin-top: 48px;
  padding: 16px;

  border-radius: 16px;
  background: var(--accent-bg-color);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: var(--light-text-color);
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.36px;

  > svg {
    width: 20px;
    height: 20px;
    stroke-width: 3px;
  }
`;
