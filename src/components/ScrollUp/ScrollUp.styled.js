import styled from "styled-components";

export const StyledBtnUp = styled.button`
  padding: 5px;
  margin: 0;
  align-items: center;
  display: flex;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  color: ${({ theme }) => theme.variableColors.activeArrowColor};
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};
  transition: color var(--animation), background-color var(--animation);

  :hover,
  :focus {
    color: ${({ theme }) => theme.variableColors.backgroundButton};
    background-color: ${({ theme }) => theme.variableColors.activeArrowColor};
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;
