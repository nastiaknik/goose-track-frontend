import { createPortal } from "react-dom";

import { Container, Thumb, StyledImage } from "./GusLoader.styled";

const GusLoaderRoot = document.querySelector("#gusloader-root");

export const GusLoader = () => {
  return createPortal(
    <Container>
      <Thumb>
        <StyledImage />
        <StyledImage />
        <StyledImage />
        <StyledImage />
      </Thumb>
    </Container>,
    GusLoaderRoot
  );
};
