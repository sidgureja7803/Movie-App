import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncloadMovie } from "../actions/MovieActions";
import { removeInfo } from "../reducers/TvSlice";
import Loading from "../Components/Loading";
import HorizontalsCards from "../partials/HorizontalsCards";
import { asyncloadTv } from "../actions/TvActions";

function TvDetails() {
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(asyncloadTv(id));
    return () => {
      dispatch(removeInfo());
    };
  }, [id]);
  return info ? (
    <>
      <div className="relative w-full ">
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.7),rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-screen p-6 bg-zinc-900 text-zinc-200"
        >
          <div className="flex items-center  gap-3">
            <i
              onClick={() => navigate("/")}
              class="ri-arrow-left-line text-4xl hover:text-[#6556CC] "
            ></i>
            <a
              className="text-xl  bg-orange-600 px-4 py-1 rounded-full text-white"
              target="_blank"
              href={info.detail.homepage}
            >
              <i class="ri-external-link-fill"></i>
            </a>
            <a
              className="text-xl bg-orange-600 px-4 py-1 rounded-full text-white"
              target="_blank"
              href={`https://www.imdb.com/title/${info.external_ids.imdb_id}/`}
            >
              IMDB
            </a>
          </div>
          <div className="w-full h-[80vh] gap-5 flex flex-col items-center justify-center">
            <h1 className="text-[6.4vw] text-center  font-bold">
              {info.detail.original_title || info.detail.name}.
            </h1>
            <div className="w-full flex justify-center gap-2">
              {info.detail.genres.map((e, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center px-4 py-1 border-[1px] rounded-full hover:bg-white hover:text-black cursor-pointer duration-150 ease-in-out border-zinc-200 w-fit"
                  >
                    <h1 className="text-md font-semibold">{e.name}</h1>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <h1 className="bg-orange-600 rounded-full font-bold px-4 py-2">
                Rating : {(info.detail.vote_average * 10).toFixed()}%
              </h1>

              <h6 className="font-semibold text-orange-600">
                Release Date : {info.detail.last_air_date}
              </h6>
              <Link className="px-4 py-2 bg-[#6556CC] rounded-full font-semibold" to={`/tv/details/${id}/trailer`}>Watch Trailer</Link>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen bg-black text-white px-[5%]">
          <h1 className="border-b-2 border-white py-2 text-5xl">Overview : </h1>
          <h1 className="mt-5 text-zinc-200 text-justify">
            {info.detail.overview}
          </h1>

          <h2 className="text-5xl mt-3 mb-8 border-b-2 py-2 border-white">
            Suggestions :{" "}
          </h2>
          {info.recommendations.length > 0 ?   <HorizontalsCards cardData={info.recommendations || info.similar} /> : <h1>Nothing to show</h1>}
          <h2 className="text-5xl mt-3 mb-8 border-b-2 py-2 border-white">
            Seasons :{" "}
          </h2>
            {info.detail.seasons.length > 0 ? <HorizontalsCards cardData={info.detail.seasons } /> : <h1>No Seasons</h1>}
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default TvDetails;
