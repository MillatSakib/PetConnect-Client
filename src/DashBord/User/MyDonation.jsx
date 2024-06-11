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
    <div className="pl-2 pr-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-10 text-center font-bold">
        All My Donation
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Pet Name</TableHead>

            <TableHead className="text-center">Pet Image</TableHead>
            <TableHead className="text-center">Donated Amount</TableHead>
            <TableHead className="text-center">Ask for Refund</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.name}</TableCell>

              <TableCell className="flex justify-center">
                <img src={data?.petPicture} className="h-10 md:h-14 lg:h-18" />
              </TableCell>

              <TableCell className="text-center">
                $ {data?.donationAmount}
              </TableCell>
              <TableCell className="text-center">
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
