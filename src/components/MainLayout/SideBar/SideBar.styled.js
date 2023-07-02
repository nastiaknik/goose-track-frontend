import styled from "styled-components";

export const OverlaySideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const DivSideBar = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.variableColors.sideBar};
  border-right: ${({ theme }) => theme.variableColors.borderColorSideBar};

  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
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
  @media (min-width: 1024px) {
    position: relative;
  }
  @media (max-height: 400px) {
    height: auto;
    overflow-y: auto;
  }
`;
export const DivNavBurger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
