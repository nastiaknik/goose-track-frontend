import styled from "styled-components";
import { Link } from "react-router-dom";
import * as signupGooseImg from "../../../assets/images/register/signup_goose-min.png";
import * as bigSignupGooseImg from "../../../assets/images/register/signup_goose@2x-min.png";
import * as loginGooseImg from "../../../assets/images/login/login_goose-min.png";
import * as bigLoginGooseImg from "../../../assets/images/login/login_goose@2x-min.png";

const setBgImage = (currentPage) => {
  return currentPage === "/register"
    ? `url(${signupGooseImg.default})`
    : `url(${loginGooseImg.default})`;
};

const setBigBgImage = (currentPage) => {
  return currentPage === "/register"
    ? `url(${bigSignupGooseImg.default})`
    : `url(${bigLoginGooseImg.default})`;
};

export const Container = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: #dcebf7;

  @media screen and (min-width: 1440px) {
    background-image: ${(prop) => setBgImage(prop.currentPage)};
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
      background-image: ${(prop) => setBigBgImage(prop.currentPage)};
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

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 18px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  color: #3e85f3;
  text-decoration-line: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  :hover,
  :focus {
    color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    margin-top: 24px;

    font-size: 18px;
    line-height: 1.33;
  }
`;
