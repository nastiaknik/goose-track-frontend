import { Container } from "./StatisticsChart.styled";
import {
  BarChart,
  Bar,
  //   Cell,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  // Tooltip,
  LabelList,
    // Legend,
    ResponsiveContainer,
} from "recharts";

const todoByDay = 3;
const inprogressByDay = 2;
const doneByDay = 4;
const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
const todoByDayPer = Math.round((todoByDay / allTasksByDay) * 100);
const inprogressByDayPer = Math.round((inprogressByDay / allTasksByDay) * 100);
const doneByDayPer = Math.round((doneByDay / allTasksByDay) * 100);

const todoByM = 30;
const inprogressByM = 30;
const doneByM = 40;
const allTasksByM = todoByM + inprogressByM + doneByM;
const todoByMPer = Math.round((todoByM / allTasksByM) * 100);
const inprogressByMPer = Math.round((inprogressByM / allTasksByM) * 100);
const doneByMPer = Math.round((doneByM / allTasksByM) * 100);

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

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 15;

  return (
    <g>
      <text
        x={x +2+ width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${value}%`}
      </text>
    </g>
  );
};

export const StatisticsChart = () => {
  return (
    <Container>
      <ResponsiveContainer width={800} height="80%">
        <BarChart
          width={780}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={75}
          barGap={10}
          barSize={27}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} tickMargin={16} />

          <YAxis
            type="number"
            domain={[0, allTasksByM]}
            position="left"
            axisLine={false}
            tickLine={false}
            tickMargin={50}
          >
            <Label value="Task" position="top" offset={-8} />
          </YAxis>
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar
            dataKey="ByDay"
            fill="var(--gradient-chart-by-day)"
            radius={[0, 0, 10, 10]}
            // maxBarSize={27}
          >
            <LabelList
              dataKey="ByDay"
              position="top"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar
            dataKey="ByMonth"
            // ${({theme})=>theme.testcolor1}
            fill="#3E85F3"
            radius={[0, 0, 10, 10]}
            // maxBarSize={27}
          >
            <LabelList
              dataKey="ByMonth"
              position="top"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};