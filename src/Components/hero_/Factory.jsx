import React from 'react'
import { MdLocationPin } from "react-icons/md";

const Factory = () => {
    return (
        <section className='container mx-auto  relative py-10 pb-56 '>
            <img className='w-full h-[450px] ' src="/home/main-build.jpg" alt="" />
            <div className="flex w-[90%] justify-between ml-[5%] absolute bottom-40 ">

                <div className="w-[32%]  rounded-lg ">
                    <img className='w-full  h-[180px] rounded-t-md' src="/home/build1.jpg" alt="building" />
                    <div className="bg-[#c5bffa6d] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Trusted By Thousand</h4>
                    </div>
                </div>

                <div className="w-[32%]  rounded-md">
                    <img className='w-full h-[180px] rounded-t-md' src="/home/build2.jpg" alt="building" />
                    <div className="bg-[#c5bffa6d] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Food Factory Design</h4>
                    </div>
                </div>

                <div className="w-[32%]  rounded-md">
                    <img className='w-full h-[180px] rounded-t-md' src="/home/build3.jpg" alt="building" />
                    <div className="bg-[#c5bffa6d] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Food Factory Design</h4>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Factory
