import styled from "styled-components";

export const StyledBtnUp = styled.button`
  padding: 5px;
  margin: 0;
  align-items: center;
  display: flex;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  color: var(--active-arrow-color);
  background-color: var(--secondary-bg-color);
  transition: color var(--animation), background-color var(--animation);

  :hover,
  :focus {
    color: var(--accent-bg-color);
    background-color: var(--active-arrow-color);
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;
