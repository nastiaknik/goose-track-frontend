import {
  Text,
  Number,
  Wrapper,
  Container,
  StyledPicture,
  StyledLink,
} from "./NotFound.styled";

import images from "./images";
const { phone, tablet, desktop } = images;

export const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Number>4</Number>
        <StyledPicture>
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`${phone.notFoundPhonewebp} 1x, ${phone.notFoundPhonewebp2x} 2x`}
          />
          <source
            type="image/webp"
            media="(max-width: 1279px)"
            srcSet={`${tablet.notFoundTabletwebp} 1x, ${tablet.notFoundTabletwebp2x} 2x`}
          />
          <source
            type="image/webp"
            media="(min-width: 1280px)"
            srcSet={`${desktop.notFoundDesktopwebp} 1x, ${desktop.notFoundDesktopwebp2x} 2x`}
          />
          <source
            type="image/png"
            media="(max-width: 767px)"
            srcSet={`${phone.notFoundPhonepng} 1x, ${phone.notFoundPhonepng2x} 2x`}
          />
          <source
            type="image/png"
            media="(max-width: 1279px)"
            srcSet={`${tablet.notFoundTabletpng} 1x, ${tablet.notFoundTabletpng2x} 2x`}
          />
          <source
            type="image/png"
            media="(min-width: 1280px)"
            srcSet={`${desktop.notFoundDesktoppng} 1x, ${desktop.notFoundDesktoppng2x} 2x`}
          />
          <img
            src={`${phone.notFoundPhonepng}`}
            alt="A rocket with the goose instead zero"
          />
        </StyledPicture>
        <Number>4</Number>
      </Wrapper>
      <Text>
        We’re sorry, the page you requested could not be found. Please go back
        to the <StyledLink to={"/"}>homepage</StyledLink>.
      </Text>
    </Container>
  );
};
