import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AllUser = () => {
  const [data, setData] = useState(useLoaderData());

  const handleAdmin = (email) => {
    axios
      .patch(
        `https://petconnect-kappa.vercel.app/makeAdmin`,
        { email },
        { withCredentials: true }
      )
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allUsers")
          .then((data) => setData(data));
      })
      .catch((error) => {
        toast.error(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allUsers")
          .then((data) => setData(data));
      });
  };
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 text-orange-500 dark:text-orange-400">
        All User
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Name</TableHead>

            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Profile Picture</TableHead>
            <TableHead className="text-center">Make Admin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.name}</TableCell>

              <TableCell className="text-center">{data?.email}</TableCell>

              <TableCell className="flex justify-center">
                <Avatar>
                  <AvatarImage src={data?.photoURL} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-center">
                {data?.role === "user" ? (
                  <button
                    onClick={() => handleAdmin(data?.email)}
                    className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                  >
                    Make Admin
                  </button>
                ) : (
                  <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-300 hover:bg-orange-200 active:bg-orange-300 active:dark:bg-orange-300 px-4 py-1 rounded-xl cursor-not-allowed select-none">
                    Already Admin
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUser;
