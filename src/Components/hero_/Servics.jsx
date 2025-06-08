"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Servics = () => {
    return (
        <section className='container mx-auto py-5 md:px-0 px-2 '>
            <div className="md:flex md:flex-row felx flex-col  gap-[1%] mt-10">

                <motion.div className=" md:w-[24%] w-full text-center md:border-none border-b  "

                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}                 
                >
                    <h4 className='font-bold text-[50px] text-[#c2c0dbae]'>01</h4>
                    <img className=' w-full h-[200px]  ' src="/home/pro1.png" alt="product" />
                    <h3 className='font-bold text-xl'>Product Research</h3>
                    <p>Lorem ipsum dolor sit amecon <br />
                        sectetur adipisicing elit, sed do <br />
                        eiusmod tempor</p>
                </motion.div>

                <motion.div className="  md:w-[24%] w-full text-center md:border-none border-b md:mt-0 mt-2 "
                 initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}                                          

                >
                    <h3 className='font-bold text-xl'>Design Idea</h3>
                    <p>Lorem ipsum dolor sit amecon <br />
                        sectetur adipisicing elit, sed do <br />
                        eiusmod tempor</p>
                    <img className=' w-full h-[200px]  ' src="/home/pro2.png" alt="product" />
                    <h4 className='font-bold text-[50px] text-[#c2c0dbae]'>02</h4>
                </motion.div>

                <motion.div className="  md:w-[24%] w-full text-center md:border-none border-b md:mt-0 mt-2 "

                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}  

                >
                    <h4 className='font-bold text-[50px] text-[#c2c0dbae]'>03</h4>
                    <img className=' w-full h-[200px]  ' src="/home/pro3.png" alt="product" />
                    <h3 className='font-bold text-xl'>Advice & guides</h3>
                    <p>Lorem ipsum dolor sit amecon <br />
                        sectetur adipisicing elit, sed do <br />
                        eiusmod tempor</p>
                </motion.div>

                <motion.div className="  md:w-[24%] w-full text-center md:border-none  md:mt-0 mt-2 "

                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}  

                >
                    <p className='font-bold text-xl'>Great Solutions</p>
                    <p>Lorem ipsum dolor sit amecon <br />
                        sectetur adipisicing elit, sed do <br />
                        eiusmod tempor</p>
                    <img className=' w-full h-[200px]  ' src="/home/pro4.png" alt="product" />
                    <h4 className='font-bold text-[50px] text-[#c2c0dbae] '>04</h4>
                </motion.div>

            </div>

        </section>
    )
}

export default Servics
