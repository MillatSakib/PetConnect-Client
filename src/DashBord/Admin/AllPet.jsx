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
import { Badge } from "@/components/ui/badge";

const AllPet = () => {
  const [data, setData] = useState(useLoaderData());
  const handleDelete = (id) => {
    axios
      .delete(`https://petconnect-kappa.vercel.app/petDelete/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allPets")
          .then((data) => setData(data));
      })
      .catch((error) => {
        toast.error(error.response, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allPets")
          .then((data) => setData(data));
      });
  };
  const handleAdoption = (id) => {
    axios
      .patch(`https://petconnect-kappa.vercel.app/petAdoptedByAdmin/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allPets")
          .then((data) => setData(data));
      })
      .catch((error) => {
        toast.error(error.response, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/allPets")
          .then((data) => setData(data));
      });
  };
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 text-orange-500 dark:text-orange-400">
        All Pets
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Pets</TableHead>

            <TableHead className="text-center">Pet Photo</TableHead>
            <TableHead className="text-center">Update</TableHead>
            <TableHead className="text-center">Delete</TableHead>
            <TableHead className="text-center">Adoption Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.petName}</TableCell>

              <TableCell className="flex justify-center">
                <Avatar>
                  <AvatarImage src={data?.petImgURL} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant="secondary"
                  className="text-[.8rem] hover:cursor-pointer select-none"
                >
                  Update
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant="destructive"
                  onClick={() => handleDelete(data?._id)}
                  className="text-[.8rem] hover:cursor-pointer select-none"
                >
                  Delete
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                {data?.adopted ? (
                  <span className="cursor-not-allowed">
                    <Badge variant="green" className="text-[.8rem] select-none">
                      Already Adopted
                    </Badge>
                  </span>
                ) : (
                  <Badge
                    onClick={() => handleAdoption(data?._id)}
                    variant="secondary"
                    className="text-[.8rem] hover:cursor-pointer select-none"
                  >
                    Adopt it
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllPet;
