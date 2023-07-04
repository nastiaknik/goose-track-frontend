import { StatisticsChart } from "components/StatisticsPage/StatisticsChart/StatisticsChart";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { selectMonthTasks, selectDayTasks } from "redux/tasks/selectors";
import { Container, Title } from "./StatisticsPage.styled";
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
  
   dispatch(getTasksByDay(paramsD));
 }, [paramsD, dispatch]);
   useEffect(() => {
     dispatch(getTasksByMonth(paramsM));
    
   }, [paramsM, dispatch]);


  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const tasksM = useSelector(selectMonthTasks);
  const tasksD = useSelector(selectDayTasks);

  const todoByM = tasksM.filter((task) => task.category === "To do").length ;
const inprogressByM = tasksM.filter((task) => task.category === "In progress").length;
const doneByM = tasksM.filter((task) => task.category === "Done").length;

const todoByDay = tasksD.filter((task) => task.category === "To do").length;
const inprogressByDay = tasksD.filter((task) => task.category === "In progress").length;
  const doneByDay = tasksD.filter((task) => task.category === "Done").length;
  


  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const todoByDayPer = Math.round((todoByDay / allTasksByDay) * 100) || 0;
  const inprogressByDayPer =
    Math.round((inprogressByDay / allTasksByDay) * 100) || 0;
  const doneByDayPer = Math.round((doneByDay / allTasksByDay) * 100) || 0;

 
  const allTasksByM = todoByM + inprogressByM + doneByM;
  const todoByMPer = Math.round((todoByM / allTasksByM) * 100) || 0;
  const inprogressByMPer = Math.round((inprogressByM / allTasksByM) * 100) || 0;
  const doneByMPer = Math.round((doneByM / allTasksByM) * 100) || 0;

  return (
    <>
      <Container>
      <Title>Statistics</Title>
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

StatisticsHead.propTypes = {
  selectedDate: PropTypes.any,
  setSelectedDate: PropTypes.func,
  handlePreviousDay: PropTypes.func,
  handleNextDay: PropTypes.func,
};
StatisticsChart.propTypes = {
  todoByDayPer: PropTypes.number,
  inprogressByDayPer: PropTypes.number,
  doneByDayPer: PropTypes.number,
  todoByMPer: PropTypes.number,
  inprogressByMPer: PropTypes.number,
  doneByMPer: PropTypes.number,
  currentTheme: PropTypes.bool,
};

export default StatisticsPage;
