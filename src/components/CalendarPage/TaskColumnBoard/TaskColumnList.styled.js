import styled from 'styled-components';

export const ListContainer = styled.ul.attrs(props => ({
  style: {
    height: props.tasksColumnsListHeight,
  },
}))`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  min-height: 432px;

  gap: 14px;
  overflow-x: auto;
`;