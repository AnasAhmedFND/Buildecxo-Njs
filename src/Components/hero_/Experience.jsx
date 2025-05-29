import Image from 'next/image'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Experience = () => {
    return (
        <section className='container mx-auto pt-16'>
            <div className="absolute bottom-5  container mx-auto flex justify-center ">
                <img className='h-[250px] ' src="/home/Section.png" alt="" />
            </div>
            
            <div className="flex">
                <div className="w-1/2 ">                    
                    <img className='w-full h-[400px] ' src="/home/exp.jpg" alt="experience" />

                </div>
                <div className="w-1/2  ">
                    <p className='text-[14px] mt-[80px]'>Bring to the table win-win survival strategies to ensure proactive <br />domination. At the end of the day, going forward, a new normal that has <br />
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
