import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const AllDonation = () => {
  const [data, setData] = useState(useLoaderData());
  const handleDelete = (id) => {
    axios
      .delete(`https://petconnect-kappa.vercel.app/donationDelete/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        axios
          .get("https://petconnect-kappa.vercel.app/donationCampaigns")
          .then((data) => setData(data));
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      });
  };

  const handlePause = (id) => {
    axios
      .patch(`https://petconnect-kappa.vercel.app/donationPausebyAdmin/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        axios.get("https://petconnect-kappa.vercel.app/donationCampaigns");
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      });
  };
  return (
    <div className="ml-2 mr-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 text-orange-500 dark:text-orange-400">
        All Donation Campaigns
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Pet Image</TableHead>

            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">Pause</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.name}</TableCell>
              <TableCell>
                <img src={data?.petPicture} className="h-10 md:h-14 lg:h-18" />
              </TableCell>

              <TableCell className="flex justify-center items-center mt-4">
                <Link to={`/dashboard/myCampainEdit/${data._id}`}>
                  <FaEdit className="text-2xl text-green-500 dark:text-green-400" />
                </Link>
              </TableCell>

              <TableCell className="text-center">
                {data?.paused ? (
                  <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-300 hover:bg-orange-300 active:bg-orange-300 active:dark:bg-orange-300 hover:cursor-not-allowed px-4 py-1 rounded-xl">
                    Already Paused
                  </button>
                ) : (
                  <button
                    onClick={() => handlePause(data?._id)}
                    className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                  >
                    Pause
                  </button>
                )}
              </TableCell>
              <TableCell className="text-center">
                <button
                  onClick={() => handleDelete(data?._id)}
                  className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDonation;
