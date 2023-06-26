import { format, isSameDay, isThisMonth, isToday } from 'date-fns';
import { useParams } from 'react-router-dom';
import {
  DaysOfMonth,
  Today,
  BoxTasks, Title,
  Task,
  MoreTasks,
} from './CalendarTableItem.styled';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';

export const CalendarTableItem = ({ day, dayTasks, gridRowHeight }) => {
  const DayOfMonth = useParams();
  const isWide = useMedia('(min-width: 768px)');
  const isWideSmaller = useMedia('(max-width: 374.98px)');

  const borderHeight = 1;
  let columnPaddingTop = 27;
  let taskHeight = 20 + 2; // height + gap

  if (isWide) {
    columnPaddingTop = 36;
    taskHeight = 24 + 4; // height + gap
  }

  const maxTasksInColumn = Math.floor(
    (gridRowHeight + borderHeight * 2 - columnPaddingTop) / taskHeight
  );
 

  const countTasks = dayTasks?.length;

  const AllDays = isThisMonth(new Date(DayOfMonth.currentDate))
    ? isToday(day)
      ? Today
      : DaysOfMonth
    : isSameDay(new Date(DayOfMonth.currentDate), new Date(day))
    ? Today
    : DaysOfMonth;
  return (
    <>
      <AllDays>{format(day, 'd')}</AllDays>
      <BoxTasks length={dayTasks?.length} columnPaddingTop={columnPaddingTop}>
        {countTasks > 0 &&
          countTasks <= maxTasksInColumn &&
          dayTasks?.map(task => {
            return (
              <Task key={task._id} priority={task.priority}>
                <Title priority={task.priority}>{task.title}</Title>
              </Task>
            );
          })}
        {countTasks > 0 &&
          countTasks > maxTasksInColumn &&
          dayTasks?.map((task, idx) => {
            if (idx < maxTasksInColumn - 1) {
              return (
                <Task key={task._id} priority={task.priority}>
                  <Title priority={task.priority}>{task.title}</Title>
                </Task>
              );
            }
            return false;
          })}
        {countTasks > maxTasksInColumn && isWideSmaller ? (
          <MoreTasks>+ {countTasks - maxTasksInColumn + 1}</MoreTasks>
        ) : (
          countTasks > maxTasksInColumn && (
            <MoreTasks>+{countTasks - maxTasksInColumn + 1} More</MoreTasks>
          )
        )}
      </BoxTasks>
    </>
  );
};
CalendarTableItem.propTypes = {
  day: PropTypes.object.isRequired,
  dayTasks:
    PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        createDay: PropTypes.number.isRequired,
        createMonth: PropTypes.number.isRequired,
        createYear: PropTypes.number.isRequired,
        end: PropTypes.string,
        owner: PropTypes.any.isRequired,
        priority: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ) || undefined.isRequired,
    gridRowHeight: PropTypes.number.isRequired,
};
