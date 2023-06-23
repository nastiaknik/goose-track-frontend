import styled from "styled-components";
export const Container = styled.section`
  width: 860px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  color: #fff;

  padding: 10px;
  border-radius: 29px;
  border: 0.8px solid rgba(227, 243, 255, 0.15);
  margin-left: 40px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 20px;
  }
`;
