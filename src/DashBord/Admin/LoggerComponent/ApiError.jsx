import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date);
  const [month, day, year, time] = formattedDate
    .match(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2} [AP]M)/)
    .slice(1);
  return `${day}-${month}-${year}, ${time}`;
};

export default function ApiError() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://petconnect-kappa.vercel.app/errorReport", {
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 text-red-500 dark:text-red-400">
        All Errors!
      </h2>
      <Table className="mb-10 md:mb-16 lg:mb-20 w-[85vw] lg:w-[70vw]  md:w-[75vw]">
        <TableCaption>All Error are here!.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Serial</TableHead>
            <TableHead className="text-center">Api Route</TableHead>
            <TableHead className="text-center">Time</TableHead>
            <TableHead className="text-center">User Email</TableHead>
            <TableHead className="text-center">Error Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {index + 1}
              </TableCell>
              <TableCell className="text-center">{data?.api}</TableCell>
              <TableCell className="text-center">
                {formatDate(data?.time)}
              </TableCell>
              <TableCell className="text-center">{data?.userEmail}</TableCell>
              <TableCell className="text-center">
                {data?.errorMessage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </>
  );
}
