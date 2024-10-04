import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import DropDown from "../partials/DropDown";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "Movie App | Trending";
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-full  bg-[#1f1e24] text-zinc-200 p-5">
      <div className="flex h-[8vh] items-center justify-between">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate("/")}
            class="ri-arrow-left-line text-2xl hover:text-[#6556CC] "
          ></i>
          <h1 className="text-2xl font-semibold">Trending</h1>
        </div>
        <div className="flex items-center w-[70%] gap-3">
          <TopNav />
          <DropDown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <DropDown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <div className="content w-full h-full flex flex-wrap gap-8 justify-center mt-8">
        <InfiniteScroll
          className="w-full h-full flex justify-center flex-wrap gap-5"
          dataLength={trending.length}
          next={getTrending}
          hasMore={true}
          loader={<h1>Loading</h1>}
        >
          <Cards data={trending} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
