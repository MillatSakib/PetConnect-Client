import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SystemInfo from "./LoggerComponent/SystemInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import ServerHit from "./LoggerComponent/ServerHit";
import ApiError from "./LoggerComponent/ApiError";

const Logger = () => {
  const [cpuUsageData, setCpuUsageData] = useState([]);
  const [memoryUsageData, setMemoryUsageData] = useState([]);

  const {
    data = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["systemInfo"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://petconnect-kappa.vercel.app/systemInfo",
        {
          withCredentials: true,
        }
      );
      return data;
    },
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  useEffect(() => {
    if (data.cpuUsage !== undefined) {
      setCpuUsageData((prevData) => {
        const updatedData = [...prevData, { CPU_USAGE: data.cpuUsage }];
        if (updatedData.length > 6) {
          updatedData.shift(); // Remove the first element if more than 6
        }
        return updatedData;
      });
    }

    if (data.usedMemory !== undefined && data.totalMemory !== undefined) {
      const memoryUsage = ((data.usedMemory / data.totalMemory) * 100).toFixed(
        2
      );
      setMemoryUsageData((prevData) => {
        const updatedData = [...prevData, { MEMORY_USAGE: memoryUsage }];
        if (updatedData.length > 6) {
          updatedData.shift(); // Remove the first element if more than 6
        }
        return updatedData;
      });
    }
  }, [data]);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4 text-orange-500 dark:text-orange-400">
        Server Logger
      </h2>
      <Tabs
        defaultValue="info"
        className="flex flex-col justify-center items-center mt-2 md:mt-4"
      >
        <TabsList className="mx-auto">
          <TabsTrigger value="info" active>
            System Info
          </TabsTrigger>
          <TabsTrigger value="hits">Server Hit Record</TabsTrigger>
          <TabsTrigger value="errors">Server Errors</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <SystemInfo
            data={data}
            isLoading={isLoading}
            refetch={refetch}
            cpuUsageData={cpuUsageData}
            memoryUsageData={memoryUsageData}
          />
        </TabsContent>
        <TabsContent value="hits">
          <ServerHit></ServerHit>
        </TabsContent>
        <TabsContent value="errors">
          <ApiError></ApiError>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Logger;
