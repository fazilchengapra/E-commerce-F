import { ArrowUp } from "lucide-react";
import React from "react";
import TodaySaleBarChart from "./TodaySaleBarChart";
import TodayVisitorArea from "./TodayVisitorArea";
import WeekVisitors from "./WeekVisitors";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const charts = [
  { component: <TodaySaleBarChart data={data} />, name: "Today Sales" },
  { component: <TodayVisitorArea data={data} />, name: "Today Visitors" },
  { component: <WeekVisitors data={data} />, name: "This Week Visitors" },
];

const Charts = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {charts.map((item) => (
        <div
          key={item.name}
          className="rounded-md w-full h-fit bg-white outline-1 outline-[#ECEDEE]  flex flex-col"
        >
          <div className="flex flex-row justify-between mx-3 items-center mt-5">
            <div className="flex flex-col gap-1">
              <div>
                <h2 className="text-2xl font-bold">₹2000</h2>
              </div>
              <div className="text-[#4B5563]">{item.name}</div>
            </div>
            <div className="flex items-center gap-1 text-[#0E9F6E] font-bold">
              <div>4,3%</div>
              <ArrowUp size={15} strokeWidth={3} />
            </div>
          </div>
          <div className="flex-1">{item.component}</div>
        </div>
      ))}
    </div>
  );
};

export default Charts;
