import styled from "styled-components";

export const FeedbackButton = styled.button`
  background-color: var(--accent-bg-color);
  font-size: 12px;
  color: var(--light-text-color);
  width: 97px;
  height: 32px;
  font-family: InterSemiBold;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 130px;
    height: 42px;
    font-size: 14px;
  }
`;
