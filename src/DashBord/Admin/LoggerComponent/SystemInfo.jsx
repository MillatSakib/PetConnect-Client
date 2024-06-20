import React from "react";
import CPU from "./CPU";
import MEMORY from "./Memory";

const SystemInfo = ({ data, cpuUsageData, memoryUsageData }) => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 text-green-500 dark:text-green-400">
        Server System Info
      </h3>
      <div className="flex flex-col-reverse justify-center items-center mt-4">
        <div>
          {" "}
          <CPU cpuUsageData={cpuUsageData} cpuCore={data?.totalCores}></CPU>
          <MEMORY memoryUsageData={memoryUsageData} memoryData={data}></MEMORY>
        </div>
        <div className="text-2xl text-orange-500 font-bold">
          OS: {data?.platform}_{data?.architecture}
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
