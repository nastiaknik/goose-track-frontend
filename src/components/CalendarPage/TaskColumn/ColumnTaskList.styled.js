import styled from "styled-components";

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* overflow-x: auto;
  white-space: nowrap; */
  padding-left: 0;

  gap: 14px;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;
