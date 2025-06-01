import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = (props) => {
  return (
    <section className=' h-[455px] '>
      <div className="relative opacity-70  ">
       <img className='w-full h-[450px] ' src="/e-hero.png" alt="" />
      </div>

      <div className="text-center relative bottom-[200px] ">
        <p className='font-bold text-4xl  '>{props.page_title}</p>
        <p className='flex justify-center items-center text-green-500 text-xl font-bold md:mt-2 '> <span className='mr-2'>{props.page_title} </span> <MdKeyboardDoubleArrowRight className='text-red-500' /> <span className='ml-2 text-white'>{props.page} </span> </p> 
      </div>
    </section>
  )
}

export default Hero
