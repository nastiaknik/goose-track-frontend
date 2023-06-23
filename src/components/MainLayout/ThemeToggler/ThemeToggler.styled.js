import styled from "styled-components"
export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.variableColors.primaryBackground};
  /* background: "var(--primary-text-color)"; */
  width: 32px;
  height: 32px;
  margin-left: 5px;
`;