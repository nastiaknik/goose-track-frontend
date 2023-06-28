import styled from "styled-components";
import { TASK_PRIORITY } from "../../../constants/Priority";

export const DaysOfMonth = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 4px 6px;

  border-radius: 6px;
  @media (min-width: 768px) {
    top: 12px;
    right: 14px;
    width: 27px;
    height: 26px;

    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export const Today = styled(DaysOfMonth)`
  background-color: var(--accent-bg-color);
  color: var(--light-text-color);
`;
export const BoxTasks = styled.ul`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => props.columnPaddingTop}px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 20px;
  grid-gap: 2px;

  @media (min-width: 768px) {
    grid-auto-rows: 24px;
    grid-gap: 4px;
  }
`;

export const Task = styled.li`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 10px);

  width: 95%;
  padding: 0 4px;
  background: var(
    ${(props) => {
      if (props.priority === TASK_PRIORITY.medium) {
        return "--priority-medium-bg-color";
      }
      if (props.priority === TASK_PRIORITY.high) {
        return "--priority-high-bg-color";
      }
      return "--priority-low-bg-color";
    }}
  );
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 90%;
    grid-template-rows: minmax(auto, 11px);
    padding: 0 6px;
  }
  @media (min-width: 1280px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "InterMedium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;

  color: var(
    ${(props) => {
      if (props.priority === TASK_PRIORITY.medium) {
        return "--task-priority-medium-color";
      }
      if (props.priority === TASK_PRIORITY.high) {
        return "--task-priority-high-color";
      }
      return "--task-priority-low-color";
    }}
  );
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
export const MoreTasks = styled.p`
  margin-top: 4px;
  white-space: nowrap;

  font-family: "InterMedium", sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  @media (min-width: 768px) {
    margin-top: 6.5px;
    font-weight: 600;
    font-size: 12px;
  }
  @media (min-width: 1280px) {
    margin-top: 4px;
    font-size: 14px;
  }
`;
