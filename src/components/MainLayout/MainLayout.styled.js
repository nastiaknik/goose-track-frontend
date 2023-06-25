import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  margin-bottom: 24px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const DivLayout = styled.div`
  display: flex;

  flex-direction: row;
`;

export const DivHeader = styled.div`
  width: 100%;
`;
