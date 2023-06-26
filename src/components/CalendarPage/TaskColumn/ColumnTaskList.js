/* import { useSelector } from 'react-redux';
 */import { TaskColumnCard } from 'components/CalendarPage/TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnTaskList.styled';

export const ColumnsTasksList = ({ status }) => {
/*   const tasks = useSelector(state => state.calendar.tasks); */
/* 
  const indexCurrentDay = useSelector(state => state.calendar.indexCurrentDay);
  const dayTasks = tasks[indexCurrentDay]; */

/*   let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter(task => task.status === status.name);
  } */

  return (
    <>
      <TasksList>
       {/*  {filteredDayTasks &&
          filteredDayTasks.map(task => ( */}
           {/*  <li key={task._id}> */}
              <TaskColumnCard /* {...task} */ />
            {/* </li> */}
         {/*  ))} */}
      </TasksList>
    </>
  );
};