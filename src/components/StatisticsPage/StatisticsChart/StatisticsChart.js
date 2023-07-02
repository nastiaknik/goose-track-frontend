import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { Chart } from "./StatisticsChart.styled";

export const StatisticsChart = ({
  todoByDayPer,
  inprogressByDayPer,
  doneByDayPer,
  todoByMPer,
  inprogressByMPer,
  doneByMPer,
  currentTheme,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const qwe = [
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
    setData(qwe);
  }, [
    todoByDayPer,
    todoByMPer,
    inprogressByDayPer,
    inprogressByMPer,
    doneByDayPer,
    doneByMPer,
  ]);

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 15;
    const valX = x + 2 + width / 2;
    let valY;

    if (value === 100) {
      valY = y + radius;
    } else {
      valY = y - radius;
    }
    return currentTheme ? (
      <g>
        <text
          x={valX}
          y={valY}
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
          x={valX}
          y={valY}
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
    <>
      {data.length > 0 && (
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
                domain={[0, 100]}
                position="left"
                axisLine={false}
                tickLine={false}
                tickMargin={50}
              >
                <Label value="Task" position="top" offset={-8} />
              </YAxis>
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
                  // formatter={(value) => `${value}%`}
                />
              </Bar>
              <Bar
                dataKey="ByMonth"
                fill="url(#colorUv1)"
                radius={[0, 0, 10, 10]}
                // maxBarSize={27}
              >
                <LabelList
                  dataKey="ByMonth"
                  position="top"
                  content={renderCustomizedLabel}
                  // formatter={(value) => `${value}%`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Chart>
      )}
    </>
  );
};
