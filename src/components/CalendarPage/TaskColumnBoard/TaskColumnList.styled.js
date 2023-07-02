import styled from "styled-components";

export const ListContainer = styled.ul.attrs((props) => ({
  style: {
    height: props.tasksColumnsListHeight,
  },
}))`
  overflow-x: scroll;
  overscroll-behavior: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 0px;

  min-height: 432px;

  gap: 14px;
`;
