import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

export const ButtonClose = styled.button`
  background-color: ${({ theme }) => theme.variableColors.backgroundColorClose};
  cursor: pointer;
  padding: 0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const GrCloseBtn = styled(MdOutlineClose)`
  width: 24px;
  height: 24px;
  display: block;

  color: ${({ theme }) => theme.variableColors.colorBtnClose};
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
  @media (min-width: 1024px) {
    height: 71px;
    width: 68px;
  }
`;

export const DivBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-family: "CoolveticaRegular";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${({ theme }) => theme.variableColors.gooseColor};
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 24px;
  }
`;
export const SpanSecond = styled.span`
  font-family: "CoolveticaRegularItalic";
`;
