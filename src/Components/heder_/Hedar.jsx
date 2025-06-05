"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";


const Hedar = () => {

  const [menu, setMenu] = useState(false)

  const hendeleMenu = () => {
    if (window.innerWidth < 768) {
      setMenu(!menu)

    }
  }

  return (
    <section className=' '>
      <div className="md:hidden flex gap-5 bg-[#161D39] text-white text-xl px-2 py-2 fixed top-0 z-30 w-full  ">
        <p><LuShoppingCart /></p>
        <p><IoSearchOutline /></p>
        <div onClick={hendeleMenu} className="flex absolute top-2 right-3 font-bold  ">
          {menu === true ?
            <MdOutlineMenu className=' cursor-pointer text-end text-2xl ' />
            :
            <ImCross className='cursor-pointer text-end' />
          }

        </div>

      </div>
         <div className={` md:flex items-center md:rounded-full  md:w-[80%] w-full  md:ml-[10%] 
           text-white  z-20  md:mt-8 absolute md:h-auto h-screen md:bg-none bg-[#ff6600] mt-9    ${menu ? "md:static absolute -left-[860px]  " : "top-0 left-0   "} `}>

            <div className="bg-[#FF6600] pr-5 rounded-l-full  h-[56px] ">
              <img className=' w-[250px] lg:w-[150px]  h-[56px] md:rounded-br-4xl lg:pr-0 pr-4 md:rounded-l-full ' src="/Group-m.png" alt="netur" />


            </div>

            <div className="md:flex items-center  bg-[#FF6600] md:gap-8 gap-4 px-2 lg:gap-2 ">
              <ul className='md:flex justify-center items-center  font-bold md:gap-7 gap-14  py-4  '>
                <li onClick={hendeleMenu} > <Link href={'/'} >Home </Link> </li>
                <li onClick={hendeleMenu} className='md:mt-0 mt-4'> <Link href={'/abouts'} >About </Link> </li>
                <li onClick={hendeleMenu} className='md:mt-0 mt-4'> <Link href={'/portfolio'} >Portfolio </Link> </li>
                <li onClick={hendeleMenu} className='md:mt-0 mt-4'> <Link href={'/abouts'} >Services </Link> </li>
                <li onClick={hendeleMenu} className='md:mt-0 mt-4'> <Link href={'/abouts'} >Shop </Link> </li>
                <li onClick={hendeleMenu} className='md:mt-0 mt-4'> <Link href={'/contact'} >Contact </Link> </li>
              </ul>
              <div className="md:flex  gap-8 ">
                <p className='md:block hidden'> <AiOutlineSearch /> </p>
                <p className='md:block hidden'> <AiOutlineShoppingCart /> </p>

              </div>


            </div>
            <div className=" bg-[#c15208]  py-4 md:w-[197px]  px-[26px] md:rounded-r-full ">
              <p className='flex gap-2 items-center font-bold lg:ml-0 ml-2 '>Get a quote <MdKeyboardDoubleArrowRight /> </p>

            </div>

        </div>




    </section>
  )
}

export default Hedar
