import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Hedar = ( ) => {
  return (
    <section className=' '>
      <div className="flex items-center rounded-xl w-[80%] ml-[10%]  text-white  z-20 mt-8 absolute  ">
        <div className="bg-[#FF6600] pr-5 rounded-l-xl ">
          <Image className='bg-white rounded-br-4xl rounded-l-xl pr-4 ' src="/Group.png" alt="netur" width={260} height={52} />

        </div>

        <div className="flex items-center  bg-[#FF6600] gap-8 px-2  ">
          <ul className='flex justify-center items-center  font-bold gap-8  py-4  '>
            <li> <Link href={'/'} >Home </Link> </li>
            <li> <Link href={'/abouts'} >Pages </Link> </li>
            <li> <Link href={'/abouts'} >Services </Link> </li>
            <li> <Link href={'/abouts'} >Blog </Link> </li>
            <li> <Link href={'/abouts'} >Shop </Link> </li>
            <li> <Link href={'/contact'} >Contact </Link> </li>
          </ul>

          <p> <AiOutlineSearch /> </p>
          <p> <AiOutlineShoppingCart /> </p>

        </div>
        <div className=" bg-[#c15208] py-4 px-[26px] rounded-r-xl ">
          <p className='flex gap-2 items-center font-bold ml-2 '>Get a quote <MdKeyboardDoubleArrowRight /> </p>

        </div>

      </div>
    



    </section>
  )
}

export default Hedar
