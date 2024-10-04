import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className='w-[25%] h-full p-4 border-r-2 border-zinc-700'>
        <h1 className='font-bold text-3xl tracking-tighter'> <i class="text-[#6556CC] ri-movie-2-line"></i> SCSDB.</h1>
        <nav className='mt-5 px-2'>
            <h3 className='font-semibold tracking-tight text-lg mb-2'>News Feeds</h3>
            {[
                {icon :<i class="ri-fire-fill"></i> ,title : 'Trending', to :`/trending`},
                {icon :<i class="ri-bard-fill"></i> ,title : 'Popular', to :`/popular`},
                {icon :<i class="ri-movie-fill"></i> ,title : 'Movies', to :`/movie`},
                {icon :<i class="ri-tv-2-line"></i> ,title : 'TV Shows', to :`/tv`},
                {icon :<i class="ri-team-fill"></i> ,title : 'People', to :`/person`},
            ].map((elem) =>( <Link to={elem.to} className='inline-block hover:bg-[#6556CC] hover:text-white font-semibold duration-75 text-zinc-400 p-4  w-full rounded-md '>{elem.icon}  {elem.title}</Link>))}
           
        </nav>
        <hr />
        <nav className='mt-5 px-2'>
            <h3 className='font-semibold tracking-tight text-lg mb-2'>Website Information</h3>
            {[
                {icon :<i class="ri-information-2-fill"></i> ,title : 'About SCSDB', to :`/`},
                {icon :<i class="ri-phone-fill"></i>     ,title : 'Contact Us', to :`/`},
               
            ].map((elem) =>( <Link to={elem.to} className='inline-block hover:bg-[#6556CC] hover:text-white font-semibold duration-75 text-zinc-400 p-4  w-full rounded-md '>{elem.icon}  {elem.title}</Link>))}
           
        </nav>
    </div>
  )
}

export default SideNav