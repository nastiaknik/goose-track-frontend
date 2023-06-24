import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  padding: 7px 0;
`;
export const Title = styled.p`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 18px 18px 20px;
  line-height: 1.11;
  color: var(--primary-text-color);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border-radius: 50%;
  color: var(--primary-text-color);
  border: 2px solid;
  border-color: var(--primary-text-color);
  transition: color var(--animation), border-color var(--animation);
  &:hover,
  :focus {
    color: var(--hover-btn-bg-color);
    border-color: var(--hover-btn-bg-color);
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;
  stroke: currentColor;
  fill: transparent;
`;