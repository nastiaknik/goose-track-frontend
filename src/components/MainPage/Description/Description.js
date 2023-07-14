import { useTranslation } from "react-i18next";

import {
  Container,
  HiddenH2,
  StyledUl,
  StyledLi,
  StyledH3,
  StyledNumberSpan,
  StyledAccentH3,
  StyledTextP,
  StyledThumbDiv,
} from "./Description.styled";

import images from "../images";
const { phone, tablet, desktop } = images;

export const Description = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HiddenH2>{t("Description")}</HiddenH2>
      <StyledUl>
        <StyledLi>
          <div>
            <StyledH3>
              <StyledNumberSpan>1.</StyledNumberSpan>
              <StyledAccentH3>{t("Calendar")}</StyledAccentH3>
              {t("View")}
            </StyledH3>
            <StyledTextP>{t("GooseTrack's Calendar view")}</StyledTextP>
          </div>
          <StyledThumbDiv>
            <picture>
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone1webp} 1x, ${phone.landingPhone1webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet1webp} 1x, ${tablet.landingTablet1webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop1webp} 1x, ${desktop.landingDesktop1webp2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone1png} 1x, ${phone.landingPhone1png2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet1png} 1x, ${tablet.landingTablet1png2x} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop1png} 1x, ${desktop.landingDesktop1png2x} 2x`}
              />
              <img src={`${phone.landingPhone1png}`} alt="Calendar landing" />
            </picture>
          </StyledThumbDiv>
        </StyledLi>
        <StyledLi>
          <div>
            <StyledH3>
              <StyledNumberSpan>2.</StyledNumberSpan>
              {t("Sidebar")}
            </StyledH3>
            <StyledTextP>{t("GooseTrack offers easy access")}</StyledTextP>
          </div>
          <StyledThumbDiv>
            <picture>
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone2webp} 1x, ${phone.landingPhone2webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet2webp} 1x, ${tablet.landingTablet2webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop2webp} 1x, ${desktop.landingDesktop2webp2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone2png} 1x, ${phone.landingPhone2png2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet2png} 1x, ${tablet.landingTablet2png2x} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop2png} 1x, ${desktop.landingDesktop2png2x} 2x`}
              />
              <img src={`${phone.landingPhone2png}`} alt="Calendar landing" />
            </picture>
          </StyledThumbDiv>
        </StyledLi>
        <StyledLi>
          <div>
            <StyledH3>
              <StyledNumberSpan>3.</StyledNumberSpan>
              <StyledAccentH3>{t("All in")}</StyledAccentH3>
              {t("One")}
            </StyledH3>
            <StyledTextP>{t("GooseTrack is an all-in-one")}</StyledTextP>
          </div>
          <StyledThumbDiv>
            <picture>
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone3webp} 1x, ${phone.landingPhone3webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet3webp} 1x, ${tablet.landingTablet3webp2x} 2x`}
              />
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop3webp} 1x, ${desktop.landingDesktop3webp2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 767px)"
                srcSet={`${phone.landingPhone3png} 1x, ${phone.landingPhone3png2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 1279px)"
                srcSet={`${tablet.landingTablet3png} 1x, ${tablet.landingTablet3png2x} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 1280px)"
                srcSet={`${desktop.landingDesktop3png} 1x, ${desktop.landingDesktop3png2x} 2x`}
              />
              <img src={`${phone.landingPhone3png}`} alt="Calendar landing" />
            </picture>
          </StyledThumbDiv>
        </StyledLi>
      </StyledUl>
    </Container>
  );
};
