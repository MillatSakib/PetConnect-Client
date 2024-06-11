import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const DonationCampain = () => {
  const [data, setData] = useState(useLoaderData());
  const [donationDetailData, setDonationDetailData] = useState([]);
  const donataionDetails = (id) => {
    axios
      .get(`https://petconnect-kappa.vercel.app/viewDonator/${id}`)
      .then((data) => setDonationDetailData(data.data));
  };
  const pauseDonation = (id) => {
    axios
      .patch(`https://petconnect-kappa.vercel.app/donationPause/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/myAchivedDonation", {
            withCredentials: true,
          })
          .then((data) => setData(data));
      })
      .catch((error) => {
        toast.error(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/myAchivedDonation")
          .then((data) => setData(data));
      });
  };

  const resumeDonation = (id) => {
    axios
      .patch(`https://petconnect-kappa.vercel.app/donationResume/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        toast.success(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/myAchivedDonation", {
            withCredentials: true,
          })
          .then((data) => setData(data));
      })
      .catch((error) => {
        toast.error(data.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        axios
          .get("https://petconnect-kappa.vercel.app/myAchivedDonation")
          .then((data) => setData(data));
      });
  };
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 md:my-8 lg:my-10 text-center font-bold">
        My Donation Campain
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Pet Name</TableHead>

            <TableHead className="text-center">
              Maximum Donation Amount
            </TableHead>
            <TableHead className="text-center">Donation Progress Bar</TableHead>
            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">Pause/Resume</TableHead>
            <TableHead className="text-center">View Donator</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data?.petName}</TableCell>

              <TableCell className="text-center">
                {" "}
                $ {data?.maxDonation}
              </TableCell>

              <TableCell className="text-right flex gap-2 justify-center items-center">
                <span>
                  {Math.floor(
                    (data.totalDonation / data.totalAmountDonationNeed) * 100
                  )}
                  %
                </span>
                <Progress
                  value={
                    (data.totalDonation / data.totalAmountDonationNeed) * 100
                  }
                  className="max-w-[200px]"
                />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-center">
                  <Link to={`/dashboard/myCampainEdit/${data.campaignId}`}>
                    <FaRegEdit className="text-2xl cursor-pointer select-none" />
                  </Link>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-center">
                  {data?.paused ? (
                    <Badge
                      onClick={() => resumeDonation(data?.campaignId)}
                      variant="destructive"
                      className="text-[1rem] cursor-pointer select-none"
                    >
                      Unpause
                    </Badge>
                  ) : (
                    <Badge
                      onClick={() => pauseDonation(data?.campaignId)}
                      variant="destructive"
                      className="text-[1rem] cursor-pointer select-none"
                    >
                      Pause
                    </Badge>
                  )}

                  {console.log(data.paused)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">
                      <FaRegEye
                        className="text-2xl cursor-pointer select-none"
                        onClick={() => donataionDetails(data?.campaignId)}
                      />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>All User Who Donated</AlertDialogTitle>
                      <AlertDialogDescription>
                        <Table>
                          <TableCaption>
                            A list of your donation details
                          </TableCaption>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-center w-[30px]">
                                Serial No.
                              </TableHead>
                              <TableHead className="text-center">
                                Name
                              </TableHead>
                              <TableHead className="text-center">
                                Email
                              </TableHead>
                              <TableHead className="text-center">
                                Amount
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {donationDetailData.map((data, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-center">
                                  {index + 1}
                                </TableCell>
                                <TableCell className="text-center">
                                  {data?.name}
                                </TableCell>
                                <TableCell className="text-center">
                                  {data?.email}
                                </TableCell>
                                <TableCell className="text-center">
                                  {data?.donationAmount}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Close</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <div className="flex justify-center"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div></div>
    </div>
  );
};

export default DonationCampain;
