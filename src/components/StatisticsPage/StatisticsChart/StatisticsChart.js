
import {
  BarChart,
  Bar,
  //   Cell,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  LabelList,
  //   Legend,
  //   ResponsiveContainer,
} from "recharts";

const todoByDay = 3;
const inprogressByDay = 2;
const doneByDay = 4;
const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
const todoByDayPer = (todoByDay / allTasksByDay) * 100;
const inprogressByDayPer = (inprogressByDay / allTasksByDay) * 100;
const doneByDayPer = (doneByDay / allTasksByDay) * 100;

const todoByM = 30;
const inprogressByM = 30;
const doneByM = 40;
const allTasksByM = todoByM + inprogressByM + doneByM;
const todoByMPer = (todoByM / allTasksByM) * 100;
const inprogressByMPer = (inprogressByM / allTasksByM) * 100;
const doneByMPer = (doneByM / allTasksByM) * 100;

const data = [
  {
    name: "To Do",
    ByDay: todoByDayPer,
    ByMonth: todoByMPer,
    amt: 2400,
  },
  {
    name: "In Progress",
    ByDay: inprogressByDayPer,
    ByMonth: inprogressByMPer,
    amt: 2210,
  },
  {
    name: "Done",
    ByDay: doneByDayPer,
    ByMonth: doneByMPer,
    amt: 2290,
  },
];
console.log(allTasksByM);
export const StatisticsChart = () => {
  return (
    // <ResponsiveContainer width={700} height="80%">
    <BarChart
      width={860}
      height={440}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, allTasksByM]}>
        <Label value="Task" position="top" />
      </YAxis>
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="ByDay" fill="#FFD2DD" radius={[10, 10, 10, 10]} maxBarSize={27}>
        {/* <LabelList dataKey="ByDay" position="top" /> */}
      </Bar>
      <Bar dataKey="ByMonth" fill="#3E85F3" radius={[10, 10, 10, 10]} maxBarSize={27}>
        <LabelList dataKey="ByMonth" position="top" />
      </Bar>
    </BarChart>
    // </ResponsiveContainer>
  );
};
