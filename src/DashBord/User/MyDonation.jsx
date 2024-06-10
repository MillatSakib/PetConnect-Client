import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const MyDonation = () => {
  const [data, setData] = useState(useLoaderData());
  const handleDelete = (data) => {
    axios
      .delete(`https://petconnect-kappa.vercel.app/refundDonation/${data}`, {
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get(`https://petconnect-kappa.vercel.app/myDonation`, {
            withCredentials: true,
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            toast.success(error.data, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      });
  };
  // console.log(data);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Pet Name</TableHead>

            <TableHead className="text-right">Pet Image</TableHead>
            <TableHead className="text-right">Donated Amount</TableHead>
            <TableHead className="text-right">Ask for Refund</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.name}</TableCell>

              <TableCell className="text-right">
                <img src={data?.petPicture} className="h-10 md:h-14 lg:h-18" />
              </TableCell>

              <TableCell className="text-right">
                $ {data?.donationAmount}
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                >
                  Refund
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyDonation;
