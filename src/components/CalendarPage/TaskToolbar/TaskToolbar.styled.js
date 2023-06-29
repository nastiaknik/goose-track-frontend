import styled from "styled-components";

export const Item = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.variableColors.text};

    &:hover,
    &:focus {
      fill: var(--accent-text-color);
    }
  }
`;
