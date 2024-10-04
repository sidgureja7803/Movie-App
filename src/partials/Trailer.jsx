import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Trailer() {
   const navigate =  useNavigate()
   const {pathname} = useLocation();
   const category = pathname.includes('movie') ? 'movie' : 'tv';
   const ytVideo =  useSelector(state=> state[category].info.videos)
  return  (
    <div className='text-white w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.9)] flex items-center justify-center'>
        {ytVideo ? ( <ReactPlayer
        controls
        width={1000}
        height={500}
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
        ) : (<h1>Not Found</h1>) } 
       
        <i
              onClick={() => navigate(-1)}
              class="absolute top-10 left-6 ri-arrow-left-line text-4xl hover:text-[#6556CC] "
            ></i>
            </div>
  ) 
}

export default Trailer