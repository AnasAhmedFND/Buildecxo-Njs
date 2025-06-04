'use client';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Great_building = () => {
  return (
    <section id='build_about' className='container mx-auto py-5  '>
      <p className='text-center text-red-500'>Great Experience in building</p>

      <motion.div
          initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}             
        
        className="flex justify-between mt-10">
        <div className="w-[30%] border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl1.png" alt="" />
          <h5 className='font-bold '>Best Repair & <br />painting </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

        <div className="w-[30%] border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl2.png" alt="" />
          <h5 className='font-bold '>Heavy <br /> Equipment </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

        <div className="w-[30%] border border-dashed border-black rounded-b-[50px] py-2 text-center shadow-xl shadow-[#c6adcd] ">
          <img className='mx-auto' src="/about/bl3.png" alt="" />
          <h5 className='font-bold '>Apartment <br /> Design </h5>
          <p>There are many variations of passages of Lorem,…</p>

          <button className='border bg-black text-white  w-[50%] py-2 rounded-t-full flex justify-center items-center mx-auto mt-2 '><FaArrowRight /></button>

        </div>

      </motion.div>

      <div className="mt-[60px] flex border text-[12px] mx-auto gap-[22px] justify-center w-[42%] items-center pl-2 rounded-r-full ">
        <p className='text-red-500'>Offeromg High Quality Construction Solutions</p>
        <button className='border bg-[#ff6600] px-4 text-white py-2 rounded-r-full'>Build Your Dream Now </button>

      </div>

    </section>
  )
}

export default Great_building
