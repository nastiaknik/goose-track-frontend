import styled from "styled-components";

export const Wrapper = styled.div`
  //   padding: 309px 0;
  margin: 0 auto;
  //   width: 100%;
  //   background-color: var(--secondary-bg-color);
  text-align: center;
`;

export const Number = styled.span`
  color: var(--accent-text-color);
  font-size: 100px;
  font-family: "InterBold";
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  color: var(--review-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-family: "InterMedium";
  font-weight: 500;
  max-width: 281px;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`;
