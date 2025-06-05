'use client';
import React, { useState } from 'react'


const Contractors = () => {

    const [mission, setMission] = useState('An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised');

   


    return (
        <section className='container mx-auto  md:py-10 py-4 md:flex gap-[2%] md:px-0 px-2 '>
            <div className=" md:w-[58%]  ">
                <h2 className='font-bold text-2xl py-4 underline'>Contractors:</h2>
                <p className='text-red-500 text-[12px] '>About Our Company</p>
                <h2 className='font-bold text-2xl '>A team of reliable and </h2>
                <h2 className='font-bold text-2xl '> experienced Contractors</h2>
                <p className='text-[14px] mt-4 '>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia sit <br />
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. am Neque <br />
                    porro dolor set quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, <br />
                    adipisci velit, sed quia non numquam</p>

                <div className="mt-5 ">
                    <div className="flex md:gap-5 mt-2 bg-linear-60 from-yellow-500 to-red-500 py-2 px-2 shadow-2xl ">
                        <p onClick={() =>  setMission("Our Mission** An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised") }

                         className='border ml w-[30%]  bg-amber-500 rounded-xl py-2 pl-2  cursor-pointer text-white bg-linear-60 from-[#f5f] to-red-500  '>Our Mission </p>
                        <p  onClick={() =>  setMission("Our vision ** lorem-20 ") } className='border ml-2 w-[30%] bg-amber-500 rounded-xl py-2 pl-2 text-white bg-linear-60 from-[#f5f] to-red-500 hover:bg-[#f5f] cursor-pointer  '>Our Vision </p>

                        <p  onClick={() =>  setMission(" OUr Value ** lorem-15 ") } className='border ml-2 w-[30%] bg-amber-500 rounded-xl py-2 pl-2 text-white bg-linear-60 from-[#f5f] to-red-500 hover:bg-[#f5f] cursor-pointer  '>Our Value </p>
                    </div>

                    <div className="">
                    <p className=' overflow-scroll border-t text-[14px] mt-4 px-2 py-2' > {mission} </p>

                        </div>                    
                    

                </div>

                <div className="flex justify-between items-center md:gap-8 mt-4  ">
                    <button className='font-bold bg-[#ff6600] py-2 px-4 text-white rounded-md  '>Learn more</button>

                    <img className='h-[40px] md:w-[300px] w-[200px] ' src="/about/call-about.png" alt="call" />

                </div>

            </div>


            <div className=" md:w-[40%]  relative md:mt-0 mt-5 ">
                <img className='md:w-[380px] w-[325px] h-[480px]  md:ml-6 ml-2  md:mt-4 mt-4 ' src="/about/before.png" alt="background" />
                <img className='md:w-[380px] w-[315px]  h-[480px] absolute top-0 md:left-2 ' src="/about/about-1.png" alt="man" />
            </div>


        </section>
    )
}

export default Contractors
