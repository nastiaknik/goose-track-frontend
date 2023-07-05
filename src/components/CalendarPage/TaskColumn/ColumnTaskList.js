import React from "react";
import PropTypes from "prop-types";
import { TaskColumnCard } from "components/CalendarPage/TaskColumnCard/TaskColumnCard";
import { TasksList } from "./ColumnTaskList.styled";
import { useSelector } from "react-redux";
import { selectDayTasks } from "../../../redux/tasks/selectors";

export const ColumnsTasksList = ({ status = "To do" }) => {
  const dayTasks = useSelector(selectDayTasks);

  let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter((task) => task.category === status.name);
  }

  return (
    <>
      <TasksList>
        {filteredDayTasks &&
          filteredDayTasks.map((task) => (
            <TaskColumnCard task={task} key={task._id} />
          ))}
      </TasksList>
    </>
  );
};

ColumnsTasksList.propTypes = {
  status: PropTypes.object,
};
