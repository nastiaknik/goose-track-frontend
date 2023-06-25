import styled from "styled-components";

export const DivSideBar = styled.div`
  position: fixed;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding-left: 20px;
  padding-top: 24px;
  padding-right: 20px;
  padding-bottom: 24px;

  @media (min-width: 375px) {
    width: 225px;
  }
  @media (min-width: 768px) {
    width: 289px;
  }
`;
export const DivNavBurger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
