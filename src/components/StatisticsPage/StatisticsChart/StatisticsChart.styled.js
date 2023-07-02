import styled from "styled-components";

export const Chart = styled.div`
  max-width: 307px;
  height: 413px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  padding: 40px 14px 30px 14px;

  border-radius: 29px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  @media (min-width: 768px) {
    max-width: 640px;
    height: 424px;
    padding: 32px 32px 10px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 860px;
    height: 440px;
    padding: 40px 40px 15px 40px;
  }
`;
