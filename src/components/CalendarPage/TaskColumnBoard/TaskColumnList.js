import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../redux/tasks/operations";
import { selectDayTasks } from "../../../redux/tasks/selectors";
import { TasksColumn } from "../TaskColumn/TaskColumn";
import { TASK_STATUS } from "../../../constants/Status";
import { ListContainer } from "./TaskColumnList.styled";

export const TasksColumnsList = () => {
  const tasksStatus = TASK_STATUS;
  const dispatch = useDispatch();
  const dayTasks = useSelector(selectDayTasks);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const initialColumns = {};
    tasksStatus.forEach((status) => {
      const filteredTasks = dayTasks.filter(
        (task) => task.category === status.name
      );
      initialColumns[status.name] = filteredTasks;
    });
    setColumns(initialColumns);
  }, [dayTasks, tasksStatus]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceColumn = source.droppableId.replace("column-", "");
    const destinationColumn = destination.droppableId.replace("column-", "");

    const sourceTasks = columns[sourceColumn];
    const destinationTasks = columns[destinationColumn];

    if (sourceColumn !== destinationColumn) {
      const [draggedItem] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, draggedItem);

      setColumns((prevColumns) => ({
        ...prevColumns,
        [sourceColumn]: sourceTasks,
        [destinationColumn]: destinationTasks,
      }));
      dispatch(
        changeCategory({
          id: draggedItem._id,
          categoryData: { category: destinationColumn },
        })
      );
    } else {
      const updatedTasks = [...sourceTasks];
      const [draggedItem] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, draggedItem);

      setColumns((prevColumns) => ({
        ...prevColumns,
        [sourceColumn]: updatedTasks,
      }));
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ListContainer>
          {tasksStatus.map((status) => (
            <TasksColumn
              key={status.id}
              status={status}
              filteredTasks={columns[status.name] || []}
            />
          ))}
        </ListContainer>
      </DragDropContext>
    </>
  );
};
