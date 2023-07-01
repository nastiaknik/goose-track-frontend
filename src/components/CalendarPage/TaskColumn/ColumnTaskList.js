import { TaskColumnCard } from 'components/CalendarPage/TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnTaskList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectMonthTasks, selectDayTasks } from '../../../redux/tasks/selectors';
import { getTasksByMonth, getTasksByDay } from 'redux/tasks/operations';
import { useEffect } from 'react';

export const ColumnsTasksList = ({ status }) => {
  const dispatch = useDispatch();
  const monthTasks = useSelector(selectMonthTasks);
  const dayTasks = useSelector(selectDayTasks);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getTasksByMonth());
      await dispatch(getTasksByDay()); 
    };
    getData();
  }, [dispatch]);

  let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter(task => task.status === status.name);
  }

  return (
    <>
      <TasksList>
        {monthTasks.map(task => (
          <TaskColumnCard key={task._id} title={task.title} priority={task.priority} />
        ))}
        {filteredDayTasks &&
          filteredDayTasks.map(task => (
            <TaskColumnCard key={task._id} title={task.title} priority={task.priority} />
          ))}
      </TasksList>
    </>
  );
};