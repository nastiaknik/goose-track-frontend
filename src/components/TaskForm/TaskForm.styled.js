import styled from 'styled-components';

export const Form = styled.form`
  min-width: 246px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* padding: 40px 18px; */
  /* width: 303px; */
  /* width: 100%; */
  /* background-color: var(--primary-background-color); */
  /* border: var(--border);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1); */

  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-text-color);

  @media (min-width: 375px) {
    /* padding: 40px 28px; */
    width: 267px;
  }
  @media (min-width: 768px) {
    /* padding: 40px 28px; */
    width: 396px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--label-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: var(--label-text-color);
`;

export const Input = styled.input`
  height: 42px;
  /* margin-bottom: 14px; */
  padding: 14px;
  width: 100%;
  outline: none;
  background-color: rgba(255, 255, 255, 0);
  border: var(--border-auth);
  border-radius: 8px;
  font-family: var(--primary-font);
  color: var(--primary-text-color-dark-theme);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    height: 46px;
    /* margin-bottom: 18px; */
  }

  &::placeholder {
    color: var(--light-text-color);
  }
`;

export const Errors = styled.span`
  min-height: 14px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: red;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background-color: var(--accent-bg-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 8px;
  border: none;
  color: var(--light-text-color);
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  transition: box-shadow var(--animation), background-color var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-btn-bg-color);
  }

  @media (min-width: 768px) {
    /* width: 400px; */
    height: 48px;
  }
`;

export const ButtonCancel = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: var(--task-btn-cancel-bg-color);
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  transition: box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    /* width: 400px; */
    height: 48px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  /* margin-bottom: 32px; */
  padding-bottom: 20px;

  @media (min-width: 768px) {
    /* margin-top: 10px; */
  }
`;

export const RadioButtonLabel = styled.label`
  padding-left: 20px;

  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--light-text-color);
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;

    border-radius: 50%;
    height: 12px;
    width: 12px;

    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
      top: 2px;
      left: -20px;
    }


    border: 1px solid var(--secondary-bg-color-dark-theme);
    ${({ value }) => {
      switch (value) {
        case 'Low':
          return 'background-color: var(--task-priority-low-color); color: var(--task-priority-low-checked-color)';
        case 'Medium':
          return 'background-color: var(--task-priority-medium-color); color: var(--task-priority-medium-checked-color)';
        case 'High':
          return 'background-color: var(--task-priority-high-color); color: var(--task-priority-high-checked-color)';
        default:
          return 'background-color: var(--task-priority-low-color); color: var(--task-priority-low-checked-color)';
      }
    }}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    /* border-radius: 50%; */

    outline: 2px solid;
    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
    }
  }
`;