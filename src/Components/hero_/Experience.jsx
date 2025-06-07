import Image from 'next/image'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Experience = () => {
    return (
        <section className='container mx-auto pt-16 md:px-0 px-2'>
            <div className="absolute md:bottom-5 lg:bottom-16 bottom-[130px]  container mx-auto flex justify-center ">
                <img className='md:h-[250px] h-[150px] ' src="/home/Section.png" alt="" />
            </div>
            
            <div className="md:flex">
                <div className="md:w-1/2 ">                    
                    <img className='w-full h-[450px] ' src="/home/exp.jpg" alt="experience" />

                </div>
                <div className="md:w-1/2  ">
                    <p className='md:text-[14px] text-[12px] md:mt-[80px]'>Bring to the table win-win survival strategies to ensure proactive <br />domination. At the end of the day, going forward, a new normal that has <br />
                        evolved from generation X is on the runway heading towards a <br />streamlined cloud solution.</p>

                    <div className="flex flex-wrap mt-5 ">
                        <p className='flex items-center gap-2 w-1/2  ' ><IoMdCheckmarkCircleOutline className='text-red-500 ' /> 100% Satifaction</p>
                        <p className='flex items-center gap-2 w-1/2  ' ><IoMdCheckmarkCircleOutline className='text-red-500 ' />  Flexible and Cost Effective</p>
                        <p className='flex items-center gap-2 w-1/2  mt-2' ><IoMdCheckmarkCircleOutline className='text-red-500 ' />  Annual Pass Programs</p>
                        <p className='flex items-center gap-2 w-1/2  mt-2' ><IoMdCheckmarkCircleOutline className='text-red-500 ' />   Trained emploies</p>


                    </div>
                    <div className="flex gap-4 mt-5">
                        <img src="/home/sign.png" alt="sign" />
                        <div className="">
                            <p className='font-bold text-xl '>Tom Henders</p>
                            <p>CEO of Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
