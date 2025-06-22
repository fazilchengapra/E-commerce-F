import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 30 },
];

const COLORS = ["#1C64F2", "#16BDCA", "#FDBA8C"];

const PieChartt = () => {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            cursor={false}
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="rounded-md border bg-white px-3 py-2 shadow-lg text-xs space-y-1">
                  <div className="font-medium text-gray-900">
                    {payload[0].name}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span
                      className={`h-2 w-2 rounded-full`}
                      style={{
                        backgroundColor:
                          COLORS[
                            data.findIndex((d) => d.name === payload[0].name)
                          ],
                      }}
                    ></span>
                    <span className="text-gray-500">Traffic:</span>
                    <span className="font-semibold text-gray-900">
                      {payload[0].value+'%'}
                    </span>
                  </div>
                </div>
              ) : null
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartt;
