import styled from "styled-components";

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 55px;
  background-color: ${({ theme }) => theme.variableColors.primaryBackground};

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 289px;
  }
`;
