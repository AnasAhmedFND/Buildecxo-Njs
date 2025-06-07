'use client';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Great_building = () => {
  return (
    <section id='build_about' className='container mx-auto py-5 md:px-0 px-2 '>
      <p className='text-center text-red-500'>Great Experience in building</p>

      <div  className="md:flex justify-between md:mt-10 mt-4 ">
        <div className="md:w-[30%] border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl1.png" alt="" />
          <h5 className='font-bold '>Best Repair & <br />painting </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

        <div className="md:w-[30%] md:mt-0 mt-2 border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl2.png" alt="" />
          <h5 className='font-bold '>Heavy <br /> Equipment </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

        <div className="md:w-[30%] md:mt-0 mt-2 border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl3.png" alt="" />
          <h5 className='font-bold '>Apartment <br /> Design </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

      </div>

      <div className="md:mt-[60px] mt-[50px] md:flex md:border text-[12px] mx-auto gap-[22px] justify-center md:w-[42%] items-center pl-2 md:rounded-r-full ">
        <p className='text-red-500'>Offeromg High Quality Construction Solutions</p>
        <button className='border md:w-auto w-full bg-[#ff6600] px-4 text-white py-2  md:rounded-r-full mt-3 md:mt-0 '>Build Your Dream Now </button>

      </div>

    </section>
  )
}

export default Great_building
