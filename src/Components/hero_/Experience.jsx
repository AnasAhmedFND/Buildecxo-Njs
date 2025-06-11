"use client"
import Image from 'next/image'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion';


const Experience = () => {
    return (
        <section className='container mx-auto pt-16 md:px-0 px-2'>
            <motion.div className="absolute md:bottom-5 bottom-[130px]  container mx-auto flex justify-center overflow-x-hidden"
                initial={{ y: 50, opacity: 0 }}                
                whileInView={{ y: 0, opacity: 1 }} //  ( স্ক্রল করে এলিমেন্ট ভিউতে আসলে আসল অবস্থানে চলে আসবে।)
                viewport={{ once: false, amount: 0.5 }}//    ( যতবার স্ক্রল করে এলিমেন্ট ভিউতে আসবে ততবার অ্যানিমেশন চলবে।)
                transition={{ type: "spring", stiffness: 50 }}

            >
                <img className='md:h-[250px] h-[150px] ' src="/home/Section.png" alt="" />
            </motion.div>

            {/* Main Experience.......................... */}

            <div className="md:flex">

                {/* Left ........................*/}

                <motion.div className="md:w-1/2 "

                  initial={{ y: 50,scale:0.5, opacity: 0 }}
                    whileInView={{ y: 0,scale:1,  opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}

                >
                    <img className='w-full h-[450px] ' src="/home/exp.jpg" alt="experience" />

                </motion.div>

                {/* Right ........... */}
                <motion.div className="md:w-1/2  "

                  initial={{ y: 50,scale:0.5, opacity: 0 }}
                    whileInView={{ y: 0,scale:1,  opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }} 


                >

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
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
