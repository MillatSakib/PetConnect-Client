// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CPU({ cpuUsageData, cpuCore }) {
  const data = cpuUsageData;
  return (
    <div className="mt-10 md:mt-16 w-[95vw] md:w-[70vw] h-[400px]">
      <h4 className="text-center mt-6 md:mt-8 mb-2 text-2xl font-bold">
        CPU ({data[data.length - 1]?.CPU_USAGE} % used), Total Core: {cpuCore}
      </h4>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={["auto", 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="CPU_USAGE"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
