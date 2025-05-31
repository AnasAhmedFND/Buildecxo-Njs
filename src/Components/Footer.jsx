import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io5";


const Footer = () => {
  return (
    <section className='border md:pt-20 pt-10 pb-10 bg-[#140626] md:px-0 px-2 '>

      <div className="md:flex items-center justify-between border-b border-[#807380a0] container mx-auto text-white py-4  ">
        <div className="flex items-center md:gap-2 gap-4">
          <p className='w-[30px] h-[30px] border rounded-full flex justify-center items-center text-xl text-red-500 bg-white '><IoIosCall /> </p>
          <div className="">
            <p className='text-red-500'>Give us a call</p>
            <p>+123-456-7890</p>
          </div>
        </div>

        <div className="flex md:gap-4 gap-6 mt-5 ">
         
          <a className='text-2xl ' href="https://www.facebook.com/"><IoLogoFacebook /></a>
          <a className='text-2xl ' href="https://www.youtube.com/"><RiYoutubeFill /></a>
          <a className='text-2xl ' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
          <a className='text-2xl ' href="https://www.skype.com/"><IoLogoSkype /></a>

        </div>

        <div className="md:flex gap-4 items-center mt-5 ">
          <div className="font-bold ">
            <p>Join</p>
            <p>Newsletter</p>
          </div>

          <div className="flex items-center px-2 rounded-full w-[300px] bg-[#200B3A] md:mt-0 mt-2 ">
            <input className=' outline-none py-2 ' type="text" placeholder='Your email' />
            <button className='px-7 py-2 rounded-r-full bg-[#54357D] '>Submit</button>
          </div>
        </div>


      </div>

      <div className="container mx-auto md:flex items-center justify-between py-5 text-white mt-8 ">
        <div className="">
          <img className='bg-white px-2 rounded-md' src="/Group.png" alt="Group" />
          <p className='mt-2'>Improve efficiency, provide a better Customer <br />experience with modern Technolo services <br />
            available</p>
            <img className='mt-4  ' src="/home/stripe.png" alt="logo" />
        </div>

        <div className="flex flex-col gap-5">
          <h5 className='underline font-bold md:mt-0 mt-2'>Resources</h5>
          <p>About</p>
          <p>Career</p>
          <p>Contact</p>
          <p>RAQ</p>

        </div>

        <div className="flex flex-col gap-5">
          <h5 className='underline font-bold md:mt-0 mt-2'>Company</h5>
          <p>Home</p>
          <p>Contact</p>
          <p>Portfolio</p>
          <p>SErvices</p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className='underline font-bold md:mt-0 mt-2'>Help Page</h5>
          <p>About</p>
          <p>Career</p>
          <p>Contact</p>
          <p>FAQ</p>

        </div>

      </div>

      <div className="border-t border-[#807380a0] mt-5 container mx-auto py-5 flex justify-center">
        <p className='w-[258px] text-white   text-[12px] '>© Copyright 2023 All rights reserved.</p>

      </div>
    </section>
  )
}

export default Footer
