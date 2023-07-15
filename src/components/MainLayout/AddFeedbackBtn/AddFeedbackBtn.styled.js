import styled from "styled-components";

export const FeedbackButton = styled.button`
  background-color: var(--accent-bg-color);
  font-size: 12px;
  line-height: 16px;
  color: var(--light-text-color);
  padding: 0;
  padding: 0 20px;
  height: 32px;
  font-family: InterSemiBold;
  border-radius: 10px;

  @media (min-width: 430px) {
    padding: 0 32px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
  }
`;
