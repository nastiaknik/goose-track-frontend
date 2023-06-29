// import { /* useDispatch, */ useSelector } from "react-redux";
// import {
//   Calendar,
//   AllDays,
//   CurrentMonthDays,
//   OtherMonthStyledLink,
//   CurrentMonthStyledLink,
// } from "./CalendarTable.styled";
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   startOfWeek,
//   endOfWeek,
//   isSameMonth,
//   eachDayOfInterval,
//   formatISO,
//   getWeeksInMonth,
// } from "date-fns";
// import {
//   selectMonthTasks,
//   selectIsLoadingTasks,
// } from "../../../redux/tasks/selectors";
// import { CalendarTableItem } from "./CalendarTableItem";
// import { GusLoader } from "../../Loader/GusLoader";
// import { useMedia, useWindowSize } from "react-use";

// export const CalendarTable = () => {
//   /* const dispath = useDispatch(); */
//   const currentMonth = new Date();
//   const isLoading = useSelector(selectIsLoadingTasks);

//   const tasksOfMonth = useSelector(selectMonthTasks);

//   const monthStart = startOfMonth(currentMonth);
//   const monthEnd = endOfMonth(currentMonth);

//   const daysInMonth = eachDayOfInterval({
//     start: startOfWeek(monthStart, { weekStartsOn: 1 }),
//     end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
//   });

//   const isTablet = useMedia("(min-width: 768px) and (max-width: 1279.98px)");
//   const isDesktop = useMedia("(min-width: 1280px)");

//   let minGridRowsHeight = 94;
//   let headerHeight = 278;

//   if (isTablet) {
//     minGridRowsHeight = 122;
//     headerHeight = 264;
//   }

//   if (isDesktop) {
//     minGridRowsHeight = 122;
//     headerHeight = 294;
//   }

//   const { height: windowHeight } = useWindowSize();
//   const weeksInMonth = getWeeksInMonth(new Date(currentMonth), {
//     weekStartsOn: 1,
//   });
//   const minCalendarHeight = weeksInMonth * minGridRowsHeight;
//   let calendarHeight = minCalendarHeight;
//   if (windowHeight > minCalendarHeight + headerHeight) {
//     calendarHeight = windowHeight - headerHeight - 2;
//   }

//   const gridRowHeight = Math.floor(calendarHeight / weeksInMonth);

//   return (
//     <>
//       <Calendar
//         calendarHeight={`${calendarHeight}px`}
//         minGridRowsHeight={`${minGridRowsHeight}px`}
//       >
//         {isLoading && <GusLoader />}
//         {daysInMonth?.map((day, idx) => {
//           const StyledLink = !isSameMonth(day, currentMonth)
//             ? OtherMonthStyledLink
//             : CurrentMonthStyledLink;

//           const Days = !isSameMonth(day, currentMonth)
//             ? AllDays
//             : CurrentMonthDays;
//           return (
//             <Days key={idx}>
//               <StyledLink
//                 to={`/calendar/day/${formatISO(new Date(day), {
//                   representation: "date",
//                 })}`}
//               >
//                 {isSameMonth(day, currentMonth) && (
//                   <CalendarTableItem
//                     day={day}
//                     dayTasks={tasksOfMonth[Number(format(day, "d")) - 1]}
//                     gridRowHeight={gridRowHeight}
//                   />
//                 )}
//               </StyledLink>
//             </Days>
//           );
//         })}
//       </Calendar>
//     </>
//   );
// };

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
    const formattedDate = format(date, "ddMMMMyyyy");
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
