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

export default function ServerHit() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://petconnect-kappa.vercel.app/apiHit", {
        withCredentials: true,
      })
      .then((data) => setData(data.data));
  }, []);
  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 text-green-500 dark:text-green-400">
        Total Hit Count
      </h2>
      <Table className="mb-10 md:mb-16 lg:mb-20 w-[85vw] lg:w-[70vw]  md:w-[75vw]">
        <TableCaption>Full List of API Hits.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Serial</TableHead>
            <TableHead className="text-center">Api Route</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {index + 1}
              </TableCell>
              <TableCell className="text-center">{data?.api}</TableCell>
              <TableCell className="text-center">{data?.hitCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </>
  );
}
