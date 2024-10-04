import React from "react";
import { Link } from "react-router-dom";

function Header({ wallpaper }) {
  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
        <img
          className="object-cover object-center bg-black"
          src={`https://image.tmdb.org/t/p/original/${
            wallpaper.backdrop_path ||
            wallpaper.profile_path ||
            wallpaper.poster_path
          }`}
          alt=""
        />
      <div className="w-full absolute bg-black top-0 h-full bg-opacity-50 flex gap-2 flex-col justify-end p-8">
      <h1 className="text-5xl text-white font-black">{wallpaper.original_title || wallpaper.title || wallpaper.name }</h1>
      <p className="rext-md text-white tracking-tighter w-1/2">{wallpaper.overview.slice(0,200)}<Link className="text-md font-bold text-[#6556CC]">...more</Link> </p>
      <div className="flex items-center gap-5">
        
      <p><i class="ri-megaphone-fill text-yellow-300"></i>  {wallpaper.release_date || 'No Information'}</p>
      <p><i class="ri-album-fill text-yellow-300"></i>  {wallpaper.media_type.toUpperCase()}</p>
      </div>
      <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className="px-4 w-fit py-2 font-bold rounded-md mt-3 bg-[#6556CC]"> Watch Trailer </Link>
      </div>
    </div>
  );
}

export default Header;
