"use client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface TodaySaleBarChartProps {
  data: Array<{ pv: number }>;
}

const WeekVisitors = ({ data }: TodaySaleBarChartProps) => {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#1A56DB" barSize={15} background={{ fill: '#E5E7EB', radius:10 }} radius={10}  />
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
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeekVisitors;
