import React from "react";
import { Link } from "react-router-dom";

function Cards({ data,title }) {
  return (
    <>
    
    {data.map((d,idx)=>{
        return (
            <div key={idx} className="w-52 h-[55vh] shrink-0 mb-4  bg-zinc-700 p-2 rounded-md ">
            <Link to={`/${d.media_type || title}/details/${d.id}}`} className="w-full h-[80%] inline-block">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.profile_path || d.poster_path
                }`}
                alt=""
              />
            </Link>
            <h1 className="text-lg text-center tracking-tight font-semibold text-zinc-200">{d.original_title || d.title || d.name}</h1>
          </div>
        )
    })}
     
    </>
  );
}

export default Cards;
