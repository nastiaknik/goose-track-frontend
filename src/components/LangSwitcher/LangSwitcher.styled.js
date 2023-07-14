import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 25px;
    padding-right: 20px;
  }
`;

export const List = styled.ul`
  margin: 5px 0 0;
  padding: 0;
`;

export const Option = styled.li`
  width: 100%;
`;

export const LangBtn = styled.button`
  width: 100%;
  display: flex;
  gap: 5px;
  padding: 8px;
  align-items: center;
  background-color: rgb(247, 246, 249);

  :hover,
  :focus {
    background-color: rgb(220, 220, 220);
  }
`;

export const CurrentLangBtn = styled.button`
  padding: 4px;
  display: flex;
  background-color: var(--accent-text-color);

  :hover,
  :focus {
    opacity: 0.9;
  }
`;

export const LangName = styled.p`
  display: flex;
  min-width: 70px;
  justify-content: flex-start;
`;
