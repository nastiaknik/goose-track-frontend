import styled from "styled-components";
import * as loginGooseImg from "assets/images/login/login_goose-min.png";
import * as bigLoginGooseImg from "assets/images/login/login_goose@2x-min.png";

export const Container = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: var(--auth-bg-color);

  @media screen and (min-width: 1440px) {
    background-image: url(${loginGooseImg.default});
    background-size: ${(prop) =>
      prop.currentPage === "/register" ? "400px 416px" : "368px 521px"};
    background-position: ${(prop) =>
      prop.currentPage === "/register"
        ? "left 50px bottom 0"
        : "right 60px bottom 19px"};
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bigLoginGooseImg.default});
    }
  }
`;

export const ContentThumb = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;
  padding: 0 20px;
  text-align: center;

  @media screen and (min-width: 375px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
  }

  @media screen and (min-width: 1440px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 480px;
  }
`;
