import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  padding-right: 20px;
  padding-bottom: 55px;
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;