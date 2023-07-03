import styled from "styled-components";
export const Container = styled.section`
  max-width: 335px;
  height: 864px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 24px;
  padding-bottom: 135px;

  @media (min-width: 768px) {
    max-width: 704px;
    height: 854px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 132px;
    padding-bottom: 224px;
  }

  @media (min-width: 1440px) {
    max-width: 1087px;
    height: 752px;
    padding-left: 113px;
    padding-right: 114px;
    padding-top: 134px;
    padding-bottom: 104px;
  }
`;
