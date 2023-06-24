import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const ButtonClose = styled.button`
  background-color: white;
  cursor: pointer;
`;

export const GrCloseBtn = styled(GrClose)`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    height: 33px;
    width: 33px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const StyledLogoImg = styled.img`
  display: block;
  width: 36px;
  height: 35px;
  @media (min-width: 768px) {
    height: 60px;
    width: 58px;
  }
`;

export const DivBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Span = styled.span`
  font-family: "CoolveticaRegular";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: rgba(62, 133, 243, 1);
`;
export const SpanSecond = styled.span`
  font-family: "CoolveticaRegularItalic";
`;
