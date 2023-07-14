import styled from "styled-components";
import Truncate from "react-text-truncate";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 375px;
  padding-inline: 20px;
  padding-bottom: 64px;

  @media screen and (min-width: 768px) {
    max-width: 580px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1184px;
    padding-bottom: 118px;
  }
`;

export const StyledH2 = styled.h2`
  color: var(--accent-text-color);
  font-family: "InterBold";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 20px;
`;

export const StyledBtn = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    opacity: 0.4;
    cursor: auto;
  }
`;

export const CardContainer = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: var(--border-radius);
  border: var(--border-input);

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const TopCardContent = styled.div`
  display: flex;
  gap: 18px;
`;

export const ImgThumbCard = styled.div`
  border-radius: 50%;
  border: 2px solid #3e85f3;

  overflow: hidden;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;

  > img {
    display: block;
    object-fit: cover;
  }

  svg {
    margin: auto;
  }
`;

export const NameCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameCard = styled.h4`
  color: var(--secondary-text-color);
  font-family: "InterBold";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: capitalize;
`;

export const CardText = styled(Truncate)`
  color: var(--review-text-color);
  font-family: "InterMedium";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
`;

export const CardTextContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 68px;
  }
`;
