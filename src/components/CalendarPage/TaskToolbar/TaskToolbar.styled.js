import styled from "styled-components";

export const Item = styled.li`
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
  align-items: center;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.variableColors.text};
    transition: fill var(--animation);

    &:hover,
    &:focus {
      fill: var(--accent-text-color);
    }
  }
`;
