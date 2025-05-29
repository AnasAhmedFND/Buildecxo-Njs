import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io5";


const Footer = () => {
  return (
    <section className='border pt-20 pb-10 bg-[#140626] '>

      <div className="flex items-center justify-between border-b-2 container mx-auto text-white py-4 ">
        <div className="flex items-center gap-2">
          <p className='w-[30px] h-[30px] border rounded-full flex justify-center items-center text-xl text-red-500 bg-white '><IoIosCall /> </p>
          <div className="">
            <p className='text-red-500'>Give us a call</p>
            <p>+123-456-7890</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className='text-2xl '><IoLogoFacebook /></p>
          <p className='text-2xl '><RiYoutubeFill /></p>
          <p className='text-2xl '><FaLinkedinIn /></p>
          <p className='text-2xl '><IoLogoSkype /></p>

        </div>

        <div className="flex gap-4 items-center ">
          <div className="font-bold ">
            <p>Join</p>
            <p>Newsletter</p>
          </div>

          <div className="flex items-center    px-2 rounded-full w-[300px] bg-[#200B3A] ">
            <input className=' outline-none py-2 ' type="text" placeholder='Your email' />
            <button className='px-7 py-2 rounded-r-full bg-[#54357D] '>Submit</button>
          </div>
        </div>


      </div>

      <div className="container mx-auto flex items-center justify-between py-5 text-white mt-8 ">
        <div className="">
          <img className='bg-white px-2 rounded-md' src="/Group.png" alt="Group" />
          <p className='mt-2'>Improve efficiency, provide a better Customer <br />experience with modern Technolo services <br />
            available</p>
            <img className='mt-4  ' src="/home/stripe.png" alt="logo" />
        </div>

        <div className="flex flex-col gap-5">
          <h5 className='border-b font-bold '>Resources</h5>
          <p>About</p>
          <p>Career</p>
          <p>Contact</p>
          <p>RAQ</p>

        </div>

        <div className="flex flex-col gap-5">
          <h5 className='border-b font-bold '>Company</h5>
          <p>Home</p>
          <p>Contact</p>
          <p>Portfolio</p>
          <p>SErvices</p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className='border-b font-bold '>Help Page</h5>
          <p>About</p>
          <p>Career</p>
          <p>Contact</p>
          <p>FAQ</p>

        </div>

      </div>
    </section>
  )
}

export default Footer
