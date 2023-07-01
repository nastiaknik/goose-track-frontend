import { TasksColumn } from "../TaskColumn/TaskColumn";
import { TASK_STATUS } from "../../../constants/Status";
import { ListContainer } from "./TaskColumnList.styled";
import { useMedia, useWindowSize } from "react-use";

export const TasksColumnsList = () => {
  const tasksStatus = TASK_STATUS;

  const isTablet = useMedia("(min-width: 768px) and (max-width: 1279.98px)");
  const isDesktop = useMedia("(min-width: 1280px)");

  let headerHeight = 302;

  if (isTablet) {
    headerHeight = 286;
  }

  if (isDesktop) {
    headerHeight = 316;
  }

  const { height: windowHeight } = useWindowSize();
  const tasksColumnsListHeight = windowHeight - headerHeight - 2;

  return (
    <>
      <ListContainer tasksColumnsListHeight={tasksColumnsListHeight}>
        {tasksStatus.map((status) => (
          <TasksColumn key={status.id} status={status} />
        ))}
      </ListContainer>
    </>
  );
};
