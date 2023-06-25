import styled from "styled-components";
export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.variableColors.primaryBackground};
  /* background: "var(--primary-text-color)"; */
  width: 24px;
  height: 24px;
  padding: 0;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
