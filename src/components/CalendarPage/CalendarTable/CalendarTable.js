import { selectMonthTasks } from "../../../redux/tasks/selectors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { format, isSameMonth, isWeekend, isToday } from "date-fns";
import {
  Calendar,
  Cell,
  DayNumber,
  DayWeekend,
  DayNumberSpecial,
  DayToday,
  TaskWrapper,
  TaskLow,
  TaskMedium,
  TaskHigh,
  TaskPointLow,
  TaskPointMedium,
  TaskPointHigh,
} from "./CalendarTable.styled";

import { useDate } from "../../../hooks/useDate";

export const CalendarTable = ({ totalDays }) => {
  const navigate = useNavigate();
  const taskList = useSelector(selectMonthTasks);
  const urlDate = useDate();

  const handleClick = (date) => {
    date = new Date(date);
    const formattedDate = format(date, "yyyy-MM-dd");
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <Calendar>
      {totalDays.map((date, index) => {
        const tasks = taskList.filter((task) => {
          const taskDay = new Date(task.date).getDate();
          const taskMonth = new Date(task.date).getMonth();
          const currentDay = date.getDate();
          const currentMonth = date.getMonth();
          return currentDay === taskDay && currentMonth === taskMonth;
        });

        return (
          <Cell key={index} onClick={() => handleClick(date)}>
            <div>
              {isWeekend(date, urlDate) ? (
                <DayWeekend>{format(date, "d")}</DayWeekend>
              ) : !isSameMonth(date, urlDate) ? (
                <DayNumberSpecial>{format(date, "d")}</DayNumberSpecial>
              ) : isToday(date, urlDate) ? (
                <DayToday>{format(date, "d")}</DayToday>
              ) : (
                <DayNumber>{format(date, "d")}</DayNumber>
              )}
            </div>
            <TaskWrapper>
              {tasks.length <= 2 && (
                <li>
                  {tasks.map(({ _id, title, priority }) =>
                    priority.toLowerCase() === "low" ? (
                      <TaskLow key={_id}>
                        {title.slice(0, 9)}
                        {title.length > 9 && "..."}
                      </TaskLow>
                    ) : priority.toLowerCase() === "medium" ? (
                      <TaskMedium key={_id}>
                        {title.slice(0, 9)}
                        {title.length > 9 && "..."}
                      </TaskMedium>
                    ) : priority.toLowerCase() === "high" ? (
                      <TaskHigh key={_id}>
                        {title.slice(0, 9)}
                        {title.length > 9 && "..."}
                      </TaskHigh>
                    ) : (
                      ""
                    )
                  )}
                </li>
              )}
              {tasks.length > 2 && (
                <li>
                  {tasks.map(({ _id, priority }) =>
                    priority.toLowerCase() === "low" ? (
                      <TaskPointLow key={_id} />
                    ) : priority.toLowerCase() === "medium" ? (
                      <TaskPointMedium key={_id} />
                    ) : priority.toLowerCase() === "high" ? (
                      <TaskPointHigh key={_id} />
                    ) : (
                      ""
                    )
                  )}
                </li>
              )}
            </TaskWrapper>
          </Cell>
        );
      })}
    </Calendar>
  );
};
