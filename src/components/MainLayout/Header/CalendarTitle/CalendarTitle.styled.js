import styled from "styled-components";

export const Calendar = styled.p`
  font-family: InterBold;
  color: ${({ theme }) => theme.variableColors.text};
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  display: none;
  box-shadow: 0px 47px 355px 0px #00000012;
  @media (min-width: 1439px) {
    display: block;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Span = styled.span`
  font-family: Inter;
  color: ${({ theme }) => theme.variableColors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  span {
    color: var(--accent-text-color);
  }
`;
export const DivCalendar = styled.div`
  display: none;

  @media (min-width: 1439px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
