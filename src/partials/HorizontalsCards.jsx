import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function HorizontalsCards({ cardData }) {
  return (
    <div className="cards w-full h-56 mt-3 p-2  flex items-center gap-3 overflow-y-hidden overflow-x-auto">
      {cardData.map((d,i) => {
        return (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="w-52 p-2 h-60 bg-zinc-800 shrink-0 rounded-lg overflow-hidden">
            <img
              className="w-full h-[54%]"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || d.poster_path
              }`}
              alt=""
            />
            <h2 className="font-semibold tracking-tight mt-1">
              {d.original_title || d.title || d.name}
            </h2>
            <p className="text-sm tracking-tighter  font-light">
              {d.overview.slice(0, 60)}
              <Link to={`/${d.media_type}/details/${d.id}`} className="text-md text-[#6556CC]">...more</Link>
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default HorizontalsCards;
