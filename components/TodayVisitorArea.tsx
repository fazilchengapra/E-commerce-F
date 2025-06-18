"use client";
import React from "react";
import { Area, Tooltip, AreaChart, ResponsiveContainer } from "recharts";

interface TodaySaleBarChartProps {
  data: Array<{ pv: number; uv: number }>;
}

const TodayVisitorArea = ({ data }: TodaySaleBarChartProps) => {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="gradientVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B2C2E9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#B2C2E9" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#1C64F2"
            strokeWidth={7}
            fill="url(#gradientVisitors)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayVisitorArea;
