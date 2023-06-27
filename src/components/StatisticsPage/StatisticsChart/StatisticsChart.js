import { useSelector } from "react-redux";
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
import {
  Chart,
  Container,
  ChartHead,
  LegendList,
} from "./StatisticsChart.styled";
import { DatePicker } from "components/SharedComponents/DatePicker/DatePicker";
import { TbPointFilled } from "react-icons/tb";

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

export const StatisticsChart = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 15;

    return currentTheme ? (
      <g>
        <text
          x={x + 2 + width / 2}
          y={y - radius}
          fill="##111111"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${value}%`}
        </text>
      </g>
    ) : (
      <g>
        <text
          x={x + 2 + width / 2}
          y={y - radius}
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${value}%`}
        </text>
      </g>
    );
  };

  return (
    <Container>
      <ChartHead>
        <DatePicker
          // id="birthday"
          // name="birthday"
          // selected={new Date(formik.values.birthday)}
          // onChange={(date) => {
          //   formik.setFieldValue("birthday", date);
          // }}
          // onBlur={formik.handleBlur}
          dateFormat="dd-MM-yyyy"
          // maxDate={new Date()}
          placeholderText="dd-MM-yyyy"
          formatWeekDay={(day) => day.charAt(0)}
          calendarStartDay={1}
          // hasError={formik.touched.birthday && formik.errors.birthday}
          // success={formik.touched.birthday}
        />
        <LegendList>
          <li>
            <TbPointFilled color="#FFD2DD" size={20} />
            <span>By Day</span>
          </li>
          <li>
            <TbPointFilled color="#3E85F3" size={20} />
            <span>By Month</span>
          </li>
        </LegendList>
      </ChartHead>
      <Chart>
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
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(255, 210, 221)"
                  stopOpacity={0}
                />
                <stop
                  offset="100%"
                  stopColor="rgb(255, 210, 221)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(62, 133, 243)"
                  stopOpacity={0}
                />
                <stop
                  offset="100%"
                  stopColor="rgb(62, 133, 243)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
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
              fill="url(#colorUv)"
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
              fill="url(#colorUv1)"
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
      </Chart>
    </Container>
  );
};
