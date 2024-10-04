import React, { useEffect, useState } from "react";
import TopNav from "../partials/TopNav";
import DropDown from "../partials/DropDown";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Tv() {
  document.title = "Movie App | Persons";
  const [category, setCategory] = useState("popular");
  const [duration, setDuration] = useState("day");
  const [person, setperson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasMore] = useState(true);

  const getperson = async () => {
    try {
      const { data } = await axios.get(
        `/person/${category}?page=${page}`
      );

      if (data.results.length > 0) {
        setperson((prev) => [...prev, ...data.results]);
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
    if (person.length === 0) {
      getperson();
    } else {
      setPage(1);
      setperson([]);
      getperson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return person.length > 0 ? (
    <div className="w-full  bg-[#1f1e24] text-zinc-200 p-5">
      <div className="flex h-[8vh] items-center justify-between">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate("/")}
            class="ri-arrow-left-line text-2xl hover:text-[#6556CC] "
          ></i>
          <h1 className="text-2xl font-semibold">Persons</h1>
        </div>
        <div className="flex items-center w-[70%] gap-3">
          <TopNav />
          <DropDown
            title="Category"
            options={['airing_today','on_the_air','popular','top_rated']}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="content w-full h-full flex flex-wrap gap-8 justify-center mt-8">
        <InfiniteScroll
          className="w-full h-full flex justify-center flex-wrap gap-5"
          dataLength={person.length}
          next={getperson}
          hasMore={true}
          loader={<h1 className="w-full text-center">Loading</h1>}
        >
          <Cards data={person} title={'person'}/>
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Tv;
