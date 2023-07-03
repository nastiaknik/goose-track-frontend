import styled from "styled-components";

export const FeedbackButton = styled.button`
  background-color: var(--accent-bg-color);
  font-size: 12px;
  line-height: 16px;
  color: var(--light-text-color);
  padding: 0;
  width: 97px;
  height: 32px;
  font-family: InterSemiBold;
  border-radius: 10px;
  @media (min-width: 378px) {
    width: 130px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
  }
`;
