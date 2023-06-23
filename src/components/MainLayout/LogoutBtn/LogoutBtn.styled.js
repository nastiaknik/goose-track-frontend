import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  font-family: "InterRegular";
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  gap: 11px;
  height: 46px;
  width: 131px;
  color: white;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  background-color: rgba(62, 133, 243, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(43, 120, 239, 1);
  }
  @media (min-width: 768px) {
    height: 56px;
    width: 141px;
    font-size: 18px;
    line-height: 24px;
  }
`;
