import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const About_servics = () => {
  return (
   <section className='container mx-auto py-5  flex justify-between'>
    <div className=" w-[48%] relative h-[600px] ">
      <h4 className='font-bold pb-4 text-2xl underline'>About_servics:</h4>
        <img className='w-[80%] ml-[20%]  ' src="/about/as-2.png" alt="" />
        <img className='absolute w-[60%] bottom-16 z-20 ' src="/about/as-3.png" alt="" />
        <img className='absolute w-[30%] left-[50%] bottom-[10px] z-30 ' src="/about/as-1.png" alt="" />


    </div>

    <div className="w-[48%] ">
      <h2 className='font-bold text-2xl '>What We Do!</h2>
      <p className='mt-4 '>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout</p>

     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' /> World Wide Donation </p>
     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  Various industrial Applications.</p>
     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  Providing Solutions For Construction, Management</p>

     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  Engineers design and build the structure</p>
     
     <h2 className='font-bold text-2xl '>What You Can Do in!</h2>

     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />   Certified & Awards winner</p>
     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  Work with energetic team</p>
     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  Just Because You Work Hard You’ll Be Successful.</p>
     <p className='flex items-center gap-4 mt-2'><IoIosArrowDropright className='text-red-500' />  For all your construction needs!</p>

     <button className='font-bold text-white bg-[#ff6600] px-5 py-2 mt-5 rounded-md '>More Explore</button>




    </div>


   </section>
  )
}

export default About_servics
