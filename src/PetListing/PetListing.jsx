import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import axios from "axios";
import PetCard from "./PetCard";
import SkeletonCard from "./SkeletonCard";
import { useInView } from "react-intersection-observer";

const PetListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const skeletonArray = [{}, {}, {}, {}, {}, {}];

  const fetchData = useCallback(
    async (pageNumber = 1) => {
      setLoading(true);
      const apiBody = {
        timeValue: Date.now(),
        page: pageNumber,
        ...(selectValue === "all" ? {} : { category: selectValue }),
        ...(searchText === "" ? {} : { title: searchText }),
      };

      try {
        const response = await axios.post(
          "https://petconnect-kappa.vercel.app/petListing",
          apiBody
        );
        setData((prevData) => [...prevData, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [selectValue, searchText]
  );

  useEffect(() => {
    setPage(1);
    setData([]);
    setHasMore(true);
    fetchData(1);
  }, [selectValue, searchText, fetchData]);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
      fetchData(page + 1);
    }
  }, [inView, hasMore, loading, page, fetchData]);

  const handleSearchClick = () => {
    setPage(1);
    setData([]);
    setHasMore(true);
    fetchData(1);
  };

  return (
    <div className="mb-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Adopt A Pet
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <Select onValueChange={(value) => setSelectValue(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pets Category</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="hare">Hare</SelectItem>
              <SelectItem value="fish">Fish</SelectItem>
              <SelectItem value="bird">Bird</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <label className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
          />
          <Button type="submit" variant="MyTheme" onClick={handleSearchClick}>
            <FaSearch />
          </Button>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[80%] lg:w-[85%] mx-auto">
        {data.map((item, index) => (
          <PetCard data={item} key={index} />
        ))}
        {loading &&
          skeletonArray.map((_, index) => <SkeletonCard key={index} />)}
      </div>
      <div ref={ref} className="flex justify-center items-center my-8">
        {loading && hasMore && (
          <Button variant="MyTheme" disabled>
            <svg
              aria-hidden="true"
              className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PetListing;
