"use client";
import React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CircleAlert } from "lucide-react";
import SaleChart from "./SaleChart";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Sales = () => {
  const [value, setValue] = React.useState("day");

  return (
    <div className="rounded-md w-full bg-white mt-12 lg:mt-0 pt-6 outline-1 outline-[#ECEDEE]">
      <div className="lg:px-5 space-y-4">
        {/* Header */}
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center px-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl lg:text-lg font-extrabold lg:font-bold">Sales</h2>
            <CircleAlert className="size-5 lg:size-4" color="#A1A8B3" />
          </div>

          {/* Toggle Group */}
          <ToggleGroup
            variant="outline"
            type="single"
            value={value}
            onValueChange={(val: string) => val && setValue(val)}
            className="rounded-md w-full lg:w-auto"
          >
            <ToggleGroupItem
              value="year"
              aria-label="Year"
              className="data-[state=on]:bg-[#1C64F2] data-[state=on]:text-white px-3"
            >
              Year
            </ToggleGroupItem>
            <ToggleGroupItem
              value="month"
              aria-label="Month"
              className="data-[state=on]:bg-[#1C64F2] data-[state=on]:text-white px-3"
            >
              Month
            </ToggleGroupItem>
            <ToggleGroupItem
              value="day"
              aria-label="Day"
              className="data-[state=on]:bg-[#1C64F2] data-[state=on]:text-white px-3"
            >
              Day
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Chart */}
        <div className="h-96 lg:h-72 w-full">
          {" "}
          <SaleChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Sales;
