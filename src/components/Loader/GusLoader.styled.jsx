import styled from "styled-components";
import * as gusImg from "../../assets/images/loader-min.png";
import * as bigGusImg from "../../assets/images/loader@2x-min.png";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 150px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: var(--auth-bg-color);

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 250px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  display: flex;
  width: 220px;
  height: 88px;
`;

export const StyledImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 220px;
  height: 88px;
  background-image: ${`url(${gusImg.default})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;

  opacity: 0;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${bigGusImg.default})`};
  }

  :nth-child(1) {
    animation: gusAnimation 4s forwards infinite linear;
  }

  :nth-child(2) {
    animation: gusAnimation 4s forwards infinite linear 1s;
  }

  :nth-child(3) {
    animation: gusAnimation 4s forwards infinite linear 2s;
  }

  :nth-child(4) {
    animation: gusAnimation 4s forwards infinite linear 3s;
  }

  @keyframes gusAnimation {
    0% {
      transform: translateX(-120%) rotate(90deg);
      opacity: 1;
    }
    100% {
      transform: translateX(120%) rotate(90deg);
      opacity: 1;
    }
  }
`;
