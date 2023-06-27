import styled from "styled-components";

export const OverlaySideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
`;
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
  @media (min-width: 1024px) {
    position: relative;
    height: 100vh;
  }
`;
export const DivNavBurger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

//   width: 100%;
//   padding-right: 32px;
//   padding-left: 32px;
//   margin-right: auto;
//   margin-left: auto;

//   @media screen and (min-width: 320px) {
//     max-width: 320px;
//     padding-right: 20px;
//     padding-left: 20px;
//   }

//   @media screen and (min-width: 768px) {
//     max-width: 768px;
//     padding-right: 32px;
//     padding-left: 32px;
//   }

//   @media screen and (min-width: 1280px) {
//     max-width: 1280px;
//     padding-right: 32px;
//     padding-left: 32px;
//   }
// }
