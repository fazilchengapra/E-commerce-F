import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SaleChartProps = {
  data: Array<{ name: string; pv: number; uv: number }>;
};

const SaleChart = ({ data }: SaleChartProps) => {

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} className="text-xs lg:text-lg"/>
          <YAxis tickLine={false} axisLine={false} className="hidden lg:block"/>
          <Tooltip
            cursor={{
              stroke: "#E9EBEE",
              strokeWidth: 2,
              strokeDasharray: "4 4",
            }}
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

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#FABA90"
            dot={false}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#1C64F2"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleChart;
