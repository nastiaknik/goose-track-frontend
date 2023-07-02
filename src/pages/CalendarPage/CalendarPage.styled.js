import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;
