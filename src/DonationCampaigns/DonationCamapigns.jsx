import SkeletonCard from "@/PetListing/SkeletonCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import InfiniteScroll from "react-infinite-scroll-component";

const DonationCampaigns = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 6;

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = () => {
    axios
      .get(
        `https://petconnect-kappa.vercel.app/donationCampaignsUsers?offset=${offset}&limit=${limit}`
      )
      .then((res) => {
        setItems(res.data);
        if (res.data.length < limit) {
          setHasMore(false);
        }
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((err) => console.log(err));
  };

  const fetchMoreData = () => {
    axios
      .get(
        `https://petconnect-kappa.vercel.app/donationCampaignsUsers?offset=${offset}&limit=${limit}`
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        if (res.data.length < limit) {
          setHasMore(false);
        }
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-10 md:mb-14 lg:mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Donate For A Pet
      </h2>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
            <SkeletonCard key={0}></SkeletonCard>
            <SkeletonCard key={1}></SkeletonCard>
            <SkeletonCard key={2}></SkeletonCard>
            <SkeletonCard key={3}></SkeletonCard>
            <SkeletonCard key={4}></SkeletonCard>
            <SkeletonCard key={5}></SkeletonCard>
          </div>
        }
      >
        <div className="container">
          <div className="row">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
              {items.map((data, index) => (
                <DonationCard data={data} key={index}></DonationCard>
              ))}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default DonationCampaigns;
