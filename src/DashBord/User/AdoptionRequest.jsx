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

const AdoptionRequest = () => {
  const [data, setData] = useState(useLoaderData());
  console.log(data);
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
        console.log(error);
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

              <TableHead className="text-right">Email</TableHead>
              <TableHead className="text-right">Phone No.</TableHead>
              <TableHead className="text-right">Location</TableHead>
              <TableHead className="text-right">Accept Req</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{data?.name}</TableCell>

                <TableCell className="text-right">{data?.email}</TableCell>

                <TableCell className="text-right">
                  $ {data?.phoneNumber}
                </TableCell>
                <TableCell className="text-right">{data?.address}</TableCell>
                <TableCell className="text-right">
                  {!data?.accepted && !data?.rejected ? (
                    <button
                      onClick={() => handleAccpet(data.petId, data._id)}
                      className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                    >
                      Accept
                    </button>
                  ) : (
                    <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-300 hover:bg-orange-200 active:bg-orange-300 active:dark:bg-orange-300 px-4 py-1 rounded-xl cursor-not-allowed select-none">
                      Accept
                    </button>
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
