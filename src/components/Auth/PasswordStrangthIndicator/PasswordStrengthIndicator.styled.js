import styled from "styled-components";

const getBgColor = (num) => {
  switch (num) {
    case 0:
      return "#999999";
    case 25:
      return "var(--error-text-color)";
    case 50:
      return "#f59625";
    case 75:
      return "#c3e852";
    case 100:
      return "var(--correct-text-color)";
    default:
      return "transparent";
  }
};

export const Container = styled.div`
  position: absolute;
  top: 120%;
  left: 2%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 96%;
  height: 5px;
`;

export const ProgressBar = styled.div`
  width: 70%;
  height: 5px;
  border-radius: 5px;
  outline: 2px solid var(--auth-placeholder-color);

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;

export const ProgressIndicator = styled.div`
  width: ${({ num }) => `${num}%`};
  height: 100%;
  background-color: ${({ num }) => getBgColor(num)};
`;

export const ProgressText = styled.p`
  font-size: 12px;
  color: ${({ num }) => getBgColor(num)};
`;
