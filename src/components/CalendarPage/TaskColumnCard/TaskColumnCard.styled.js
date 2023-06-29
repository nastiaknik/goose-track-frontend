import { TASK_PRIORITY } from "../../../constants/Priority";
import { TaskToolbar } from "components/CalendarPage/TaskToolbar/TaskToolbar";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 14px 15px 18px 14px;

  width: 100%;

  background-color:${({theme})=>theme.variableColors.primaryBackground};
  border: var(--border-calendar-dark-theme);
  border-radius: 8px;

  @media (min-width: 1280px) {
    min-height: 100px;
    padding-top: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

export const TaskTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color:${({theme})=>theme.variableColors.calendarTextColor};
`;

export const SvgAvatar = styled(RxAvatar)`
 width: 32px;
  height: 32px;
  color: ${({theme})=>theme.variableColors.colorBtnClose};
  border:  2px solid;
  border-radius: 60%;
  border-color: var(--accent-bg-color);
`;

export const TaskAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export const TaskPriority = styled.p`
  padding: 4px 12px;
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
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;

  text-align: center;

  color: var(--light-text-color);
`;

export const Toolbar = styled(TaskToolbar)`
  margin-left: auto;
`;
