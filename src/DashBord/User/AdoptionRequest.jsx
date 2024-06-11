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
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Badge } from "@/components/ui/badge";

const AdoptionRequest = () => {
  const [data, setData] = useState(useLoaderData());
  const handleReject = (adopterId) => {
    axios
      .patch(
        `https://petconnect-kappa.vercel.app/rejectAdoptionReq/${adopterId}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get(`https://petconnect-kappa.vercel.app/allAdoptionReq`, {
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
        toast.success(error.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      });
  };
  const handleAccpet = (petId, adopterId) => {
    axios
      .patch(
        `https://petconnect-kappa.vercel.app/acceptAdoptionReq/${petId}`,
        { adopterId },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get(`https://petconnect-kappa.vercel.app/allAdoptionReq`, {
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
        toast.success(error.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      });
  };
  return (
    <div className="mx-4 lg:mx-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-10 text-center font-bold">
        All Adoption Request
      </h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Serial No.</TableHead>
              <TableHead>Name</TableHead>

              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Phone No.</TableHead>
              <TableHead className="text-center">Location</TableHead>
              <TableHead className="text-center">Req Status</TableHead>
              <TableHead className="text-center">Accept Req</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{data?.name}</TableCell>

                <TableCell className="text-center">{data?.email}</TableCell>

                <TableCell className="text-center">
                  {data?.phoneNumber}
                </TableCell>
                <TableCell className="text-center">{data?.address}</TableCell>
                <TableCell className="text-center">
                  {data?.adopted ? (
                    data?.accepted ? (
                      <Badge variant="green">Accepted</Badge>
                    ) : (
                      <Badge variant="destructive">Pet Adopted By Others</Badge>
                    )
                  ) : data?.rejected ? (
                    <Badge variant="destructive">Rejected</Badge>
                  ) : (
                    <Badge variant="secondary">Pending..</Badge>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {data?.adopted ? (
                    data?.accepted ? (
                      <button className="text-white bg-green-500 dark:bg-green-600 hover:dark:bg-green-700 hover:bg-green-600 active:bg-green-700 active:dark:bg-green-800 px-4 py-1 rounded-xl">
                        Adopted
                      </button>
                    ) : data?.rejected ? (
                      <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-300 hover:bg-orange-200 active:bg-orange-300 active:dark:bg-orange-300 px-4 py-1 rounded-xl cursor-not-allowed select-none">
                        Rejected
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReject(data._id)}
                        className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                      >
                        Reject
                      </button>
                    )
                  ) : data?.rejected ? (
                    <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-300 hover:bg-orange-200 active:bg-orange-300 active:dark:bg-orange-300 px-4 py-1 rounded-xl cursor-not-allowed select-none">
                      Rejected
                    </button>
                  ) : (
                    <div className="flex flex-col gap-1 center">
                      <button
                        onClick={() => handleAccpet(data.petId, data._id)}
                        className="text-white bg-green-500 dark:bg-green-600 hover:dark:bg-green-700 hover:bg-green-600 active:bg-green-700 active:dark:bg-green-800 px-4 py-1 rounded-xl"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(data._id)}
                        className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdoptionRequest;
