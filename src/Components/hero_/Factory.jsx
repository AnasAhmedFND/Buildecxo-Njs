import React from 'react'
import { MdLocationPin } from "react-icons/md";


const Factory = () => {
    return (
        <section id="factory" className='container mx-auto md:px-0 px-2 relative py-10 md:pb-56 pb-10 '>
            
            <img className='w-full h-[450px] ' src="/home/main-build.jpg" alt="" />
            <div className="md:flex md:w-[90%] w-full  justify-between md:ml-[5%] md:absolute md:bottom-40 ">

                <div className="md:w-[32%] w-full  rounded-lg ">
                    <img className='w-full  h-[180px] rounded-t-md' src="/home/build1.jpg" alt="building" />
                    <div className="bg-[#EEF3FF] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Trusted By Thousand</h4>
                    </div>
                </div>

                <div className="md:w-[32%] w-full  rounded-md">
                    <img className='w-full h-[180px] rounded-t-md' src="/home/build2.jpg" alt="building" />
                    <div className="bg-[#EEF3FF] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Food Factory Design</h4>
                    </div>
                </div>

                <div className="md:w-[32%] w-full  rounded-md">
                    <img className='w-full h-[180px] rounded-t-md' src="/home/build3.jpg" alt="building" />
                    <div className="bg-[#EEF3FF] px-2 py-4 ">
                        <p className='flex items-center px-4 rounded-full bg-[#ff6600] text-[10px] w-[70%] '><MdLocationPin /> 100 servics Ct Hamel Minnesota (MN) </p>
                        <h4 className='font-bold text-lg'>Food Factory Design</h4>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Factory
