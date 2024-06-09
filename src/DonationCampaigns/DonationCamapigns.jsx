import SkeletonCard from "@/PetListing/SkeletonCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const DonationCamapigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://petconnect-kappa.vercel.app/donationCampaignsUsers")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(true);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mb-10 md:mb-14 lg:mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Donate For A Pet
      </h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
          {[{}, {}, {}, {}, {}, {}].map((data, index) => (
            <SkeletonCard key={index}></SkeletonCard>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
          {data.map((data, index) => (
            <DonationCard data={data} key={index}></DonationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationCamapigns;
