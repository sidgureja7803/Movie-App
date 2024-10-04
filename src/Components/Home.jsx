import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";
import Header from "../partials/Header";
import axios from "../utils/Axios";
import HorizontalsCards from "../partials/HorizontalsCards";
import DropDown from "../partials/DropDown";
import Loading from "./Loading";

function Home() {
  document.title = "Movie App | Homepage";
  const [header, setHeader] = useState();
  const [card, setCard] = useState([]);
  const [category, setCategory] = useState("all");

  const getHeader = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setHeader(randomData);
    } catch (error) {
      console.log(error);
    }
  };
  const getCards = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setCard(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !header && getHeader();
    getCards();
    console.log(header);
  }, [category]);

  return card && header ? (
    <>
      <div className="w-full h-screen bg-[#1f1e24] text-zinc-200 flex">
        <SideNav />
        <div className="w-[75%] h-full overflow-auto ">
          <TopNav />
          <Header wallpaper={header} />
          <div className="w-full p-5 flex items-center justify-between">
            <h1 className="font-bold text-4xl ">Trending</h1>
            <DropDown
              title={"Filter"}
              options={["tv", "movie", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <HorizontalsCards cardData={card} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
