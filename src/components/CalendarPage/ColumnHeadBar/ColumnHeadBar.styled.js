import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  padding: 7px 0;
`;
export const Title = styled.p`
  font-family:'InterBold';
  font-style: normal;
  font-weight: 700;
  font-size: 18px 18px 20px;
  line-height: 1.11;
  color:${({theme})=>theme.variableColors.calendarTextColor};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border-radius: 50%;
  background-color:${({theme})=>theme.variableColors.secondaryBackground};
  color:${({theme})=>theme.variableColors.colorBtnClose};
  border: 2px solid;
  border-color:${({theme})=>theme.variableColors.calendarTextColor};
  transition: color var(--animation), border-color var(--animation);
  &:hover,
  :focus {
    color: var(--hover-btn-bg-color);
    border-color: var(--hover-btn-bg-color);
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: transparent;
`;