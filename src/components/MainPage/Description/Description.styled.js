import styled from "styled-components";

export const Container = styled.section`
  padding-inline: 20px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const HiddenH2 = styled.h2`
  visibility: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-1px, -1px);
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledLi = styled.li``;

export const StyledH3 = styled.h3`
  display: flex;
  flex-direction: column;
`;
