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

export default function MEMORY({ memoryUsageData, memoryData }) {
  const data = memoryUsageData;
  return (
    <div className="mt-10 md:mt-16 w-[95vw] md:w-[70vw] h-[400px]">
      <h4 className="text-center mt-6 md:mt-8 mb-2 text-2xl font-bold">
        MEMORY ({parseInt(memoryData?.usedMemory)}MB used from{" "}
        {parseInt(memoryData?.totalMemory)}MB)
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
            dataKey="MEMORY_USAGE"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
