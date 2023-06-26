import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;
