import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/AuthProvider";
import SkeletonCard from "@/PetListing/SkeletonCard";
import PetCard from "@/PetListing/PetCard";
import DonationCard from "@/DonationCampaigns/DonationCard";

const DonataionDetails = () => {
  const data = useLoaderData().data;
  const [randomData, setRandomData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://petconnect-kappa.vercel.app/randomDoanation`)
      .then((response) => {
        setRandomData(response.data);
        setLoading(false);
        // setLoading(false);
      })
      .catch((error) => {
        setRandomData([]);
        setLoading(false);
        console.error("Error fetching random pets:", error);
        // setLoading(false);
      });
  }, [data?.petCategory]);

  console.log(data);

  const [isOpen, setIsOpen] = useState(false);
  //   console.log(randomData);
  const { user } = useContext(AuthContext);
  const handleAdoption = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const dataBody = {
      petName: data?.petName,
      petImgURL: data?.petImgURL,
      name: name,
      phoneNumber: phone,
      address: address,
    };
    axios
      .post(
        `https://petconnect-kappa.vercel.app/petAdoptionUser/${data?._id}`,
        dataBody
      )
      .then((response) => {
        toast.success(response.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })

      .catch((error) => {
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
        });
      });
  };
  return (
    <div>
      <div className="mx-4 md:mx-6 lg:mx-8 my-18 md:my-20 lg:my-22">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-12 items-center justify-center">
          <div className="w-full md:w-[80vw] lg:w-[40vw] max-h-[600px] min-w-[300px] md:min-w-[400px] lg:min-w-[650px]">
            <img
              src={data?.petPicture}
              className="rounded-xl object-cover w- max-h-[600px] "
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Name: {data?.name}
            </h2>
            <div className="dark:opacity-65 opacity-75">
              <div className="mt-2 md:mt-4 text-xl md:text-2xl lg:text-3xl font-bold">
                Reason For appling Donation
              </div>{" "}
              {data?.longDescription}
            </div>
            <div className="dark:opacity-65 opacity-75">
              <div className="mt-2 md:mt-4 text-xl md:text-2xl lg:text-3xl font-bold">
                Summery
              </div>{" "}
              {data?.shortDescription}
            </div>

            <div className="mt-6 max-w-[900px]">
              <span>Maximum Donation:</span>&nbsp; ${data?.maxDonation}
            </div>
            <div className=" max-w-[900px]">
              <span>Total Donated:</span>&nbsp; ${data?.totalDonation}
            </div>
            <div className="mt-2 md:mt-4">
              {user ? (
                data.pause ? (
                  <span className="hover:cursor-not-allowed select-none">
                    <Button variant="MyTheme" disabled>
                      Donation no longer available
                    </Button>
                  </span>
                ) : (
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button variant="MyTheme" onClick={() => setIsOpen(true)}>
                        Donate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-orange-500">
                          {data?.petName}
                        </DialogTitle>
                        <DialogDescription>
                          Please fillup the form correctly for sent request to
                          adopt the pet!
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleAdoption}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              value={user?.displayName}
                              disabled
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="email"
                              //   defaultValue={user.email}
                              className="text-right"
                            >
                              Email
                            </Label>
                            <Input
                              id="email"
                              value={user?.email}
                              className="col-span-3"
                              disabled
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                              Phone Number
                            </Label>
                            <Input id="phone" className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="address" className="text-right">
                              Address
                            </Label>
                            <Input
                              id="address"
                              className="col-span-3"
                              required
                            />
                          </div>
                        </div>

                        <DialogFooter>
                          <Button type="submit" variant="MyTheme">
                            Save changes
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                )
              ) : (
                <Link to="/login">
                  <Button variant="MyTheme">Login to Donate</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 md:mt-8 lg:mt-10 text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
            You Can Donate Also
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[100%] lg:w-[85%] mx-auto mt-6 md:mt-8 lg:mt-12">
            {loading ? (
              <>
                <SkeletonCard></SkeletonCard>
                <SkeletonCard></SkeletonCard>
                <SkeletonCard></SkeletonCard>
              </>
            ) : (
              randomData.map((data, index) => (
                <DonationCard data={data} key={index}></DonationCard>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonataionDetails;
