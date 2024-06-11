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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyPets = () => {
  const [state, setState] = useState(true);
  const handleDelete = (data) => {
    axios
      .delete(`https://petconnect-kappa.vercel.app/myAddedPetsDelete/${data}`, {
        withCredentials: true,
      })
      .then((data) => {
        const temp = state;
        setState(!temp);
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
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
  const makeAdopted = (data) => {
    axios
      .patch(`https://petconnect-kappa.vercel.app/adoptedByOthers/${data}`, {
        withCredentials: true,
      })
      .then((data) => {
        const temp = state;
        setState(!temp);
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
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
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://petconnect-kappa.vercel.app/myAddedPets", {
        withCredentials: true,
      })
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, [state]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pl-2 pr-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-10 text-center font-bold">
        My Added Pets
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Pet Name</TableHead>
            <TableHead>Pet Category</TableHead>
            <TableHead className="text-right">Pet Image</TableHead>
            <TableHead className="text-right">Adoption Status</TableHead>
            <TableHead className="text-right">Update Pet Info</TableHead>
            <TableHead className="text-right">Delete</TableHead>
            <TableHead className="text-right">Update Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {indexOfFirstRow + index + 1}
              </TableCell>
              <TableCell>{data?.petName}</TableCell>
              <TableCell>{data?.petCategory?.toUpperCase()}</TableCell>
              <TableCell className="text-right">
                <img src={data?.petImgURL} className="h-10 md:h-14 lg:h-18" />
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">
                  {data?.adopted ? "Adopted" : "Not Adopted"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link
                  to={`/dashboard/update/${data?._id}`}
                  className="text-white bg-green-500 dark:bg-green-600 hover:dark:bg-green-700 hover:bg-green-600 active:bg-green-700 active:dark:bg-green-800 px-4 py-1 rounded-xl"
                >
                  Update Info
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="text-white bg-red-500 dark:bg-red-600 hover:dark:bg-red-700 hover:bg-red-600 active:bg-red-700 active:dark:bg-red-800 px-4 py-1 rounded-xl"
                >
                  Delete
                </button>
              </TableCell>
              <TableCell className="text-right">
                {data.adopted ? (
                  <button className="text-white bg-orange-200 dark:bg-orange-300 hover:dark:bg-orange-200 hover:bg-orange-300 active:bg-orange-200 active:dark:bg-orange-300 px-4 py-1 rounded-xl cursor-not-allowed">
                    Adopted
                  </button>
                ) : (
                  <button
                    onClick={() => makeAdopted(data._id)}
                    className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-4 py-1 rounded-xl"
                  >
                    Make Adopted
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyPets;
