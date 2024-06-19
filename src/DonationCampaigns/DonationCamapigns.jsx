import SkeletonCard from "@/PetListing/SkeletonCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import InfiniteScroll from "react-infinite-scroll-component";

const DonationCampaigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    if (loading) return; // Prevent multiple fetches at the same time

    setLoading(true);
    try {
      const response = await axios.get(
        "https://petconnect-kappa.vercel.app/donationCampaignsUsers",
        {
          params: { cursor },
        }
      );
      const { result, nextCursor } = response.data;
      setData((prevData) => [...prevData, ...result]);
      setCursor(nextCursor);
      setHasMore(nextCursor !== null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  return (
    <div className="mb-10 md:mb-14 lg:mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Donate For A Pet
      </h2>
      {loading && data.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
          {[{}, {}, {}, {}, {}, {}].map((_, index) => (
            <SkeletonCard key={index}></SkeletonCard>
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
              {[{}, {}, {}, {}, {}, {}].map((_, index) => (
                <SkeletonCard key={index}></SkeletonCard>
              ))}
            </div>
          }
          endMessage={
            <p className="text-center text-orange-500 dark:text-orange-400 font-bold text-2xl md:text-3xl lg:text-4xl my-6 md:my-10 lg:my-16">
              No more campaigns to show!!!
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
            {data.map((data, index) => (
              <DonationCard data={data} key={index}></DonationCard>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default DonationCampaigns;
