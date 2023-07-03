import { TasksColumn } from "../TaskColumn/TaskColumn";
import { TASK_STATUS } from "../../../constants/Status";
import { ListContainer } from "./TaskColumnList.styled";

export const TasksColumnsList = () => {
  const tasksStatus = TASK_STATUS;
  return (
    <>
      <ListContainer>
        {tasksStatus.map((status) => (
          <TasksColumn key={status.id} status={status} />
        ))}
      </ListContainer>
    </>
  );
};
