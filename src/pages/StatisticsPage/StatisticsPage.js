import { StatisticsChart } from "components/StatisticsPage/StatisticsChart/StatisticsChart";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { selectMonthTasks, selectDayTasks } from "redux/tasks/selectors";
import { Container } from "./StatisticsPage.styled";
import { StatisticsHead } from "components/StatisticsPage/StatisticsChart/StatisticsHead";
import { getTasksByMonth, getTasksByDay } from "redux/tasks/operations";


function StatisticsPage() {

 const [selectedDate, setSelectedDate] = useState(new Date());

 const handlePreviousDay = () => {
   const newDate = new Date(selectedDate);
   newDate.setDate(newDate.getDate() - 1);
   setSelectedDate(newDate);
 };

 const handleNextDay = () => {
   const newDate = new Date(selectedDate);
   newDate.setDate(newDate.getDate() + 1);
   setSelectedDate(newDate);
 };

 const dispatch = useDispatch();

 const paramsM = useMemo(() => {
   return {
     year: `${selectedDate.getFullYear()}`,
     month: `${selectedDate.getMonth() + 1}`.padStart(2, "0"),
   };
 }, [selectedDate]);

 const paramsD = useMemo(() => {
   return {
     year: `${selectedDate.getFullYear()}`,
     month: `${selectedDate.getMonth() + 1}`.padStart(2, "0"),
     day: `${selectedDate.getDate()}`.padStart(2, "0"),
   };
 }, [selectedDate]);


 useEffect(() => {
   dispatch(getTasksByMonth(paramsM));
   dispatch(getTasksByDay(paramsD));
 }, [paramsD, paramsM, dispatch]);


  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const tasksM = useSelector(selectMonthTasks);
  const tasksD = useSelector(selectDayTasks);

const todoByM = tasksM.filter((task) => task.category === "To do").length;
const inprogressByM = tasksM.filter((task) => task.category === "In progress").length;
const doneByM = tasksM.filter((task) => task.category === "Done").length;

const todoByDay = tasksD.filter((task) => task.category === "To do").length;
const inprogressByDay = tasksD.filter((task) => task.category === "In progress").length;
const doneByDay = tasksD.filter((task) => task.category === "Done").length;



  // const todoByDay = 3;
  // const inprogressByDay = 2;
  // const doneByDay = 4;
  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const todoByDayPer = Math.round((todoByDay / allTasksByDay) * 100);
  const inprogressByDayPer = Math.round(
    (inprogressByDay / allTasksByDay) * 100
  );
  const doneByDayPer = Math.round((doneByDay / allTasksByDay) * 100);

  //   const todoByM = 30;
  // const inprogressByM = 30;
  // const doneByM = 40;
  const allTasksByM = todoByM + inprogressByM + doneByM;
  const todoByMPer = Math.round((todoByM / allTasksByM) * 100);
  const inprogressByMPer = Math.round((inprogressByM / allTasksByM) * 100);
  const doneByMPer = Math.round((doneByM / allTasksByM) * 100);


  return (
    <>
      <Container>
        <StatisticsHead
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
         handlePreviousDay={handlePreviousDay}
         handleNextDay={handleNextDay}
        />
        <StatisticsChart
          todoByDayPer={todoByDayPer}
          inprogressByDayPer={inprogressByDayPer}
          doneByDayPer={doneByDayPer}
          todoByMPer={todoByMPer}
          inprogressByMPer={inprogressByMPer}
          doneByMPer={doneByMPer}
          currentTheme={currentTheme}
        />
      </Container>
    </>
  );
}

export default StatisticsPage;
