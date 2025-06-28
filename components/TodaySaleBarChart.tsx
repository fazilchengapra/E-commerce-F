"use client";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TodaySaleBarChartProps {
  data: Array<{ pv: number; uv: number }>;
}

const TodaySaleBarChart = ({ data }: TodaySaleBarChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <Tooltip
          cursor={false}
          content={({ active, payload, label }) =>
            active && payload?.length ? (
              <div className="rounded-md border bg-white px-3 py-2 shadow-lg text-xs space-y-1">
                <div className="font-medium text-gray-900">{label}</div>
                {payload.map((entry, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="text-gray-500">{entry.name}:</span>
                    <span className="font-semibold text-gray-900">
                      {entry.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : null
          }
        />
        <Bar
          dataKey="pv"
          fill="#FABA90"
          barSize={15}
          radius={[10, 10, 10, 10]}
        />
        <Bar
          dataKey="uv"
          fill="#1C64F2"
          barSize={15}
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TodaySaleBarChart;
