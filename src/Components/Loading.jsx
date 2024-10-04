import React from 'react'
import Rhombus from "../assets/Rhombus.gif";
import Spinner from "../assets/Spinner-3.gif";


function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-800'>
        <img className='w-[10%] mix-blend-darken' src={Rhombus} alt="" />
    </div>
  )
}

export default Loading