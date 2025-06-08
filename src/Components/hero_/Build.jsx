"use client"
import React from 'react'
import { motion } from 'framer-motion';
const Build = () => {



    return (
        <section className='container mx-auto md:flex md:flex-row flex flex-col justify-center md:justify-between pt-20 pb-4 md:px-0 px-2 '

        >

            {[
                { img: "/home/b-1.png", text: "Flooring Roofing" },
                { img: "/home/b-2.png", text: "Building Renovation" },
                { img: "/home/b-3.png", text: "Archaitecture Design" },
                { img: "/home/b-4.png", text: "Flooring Crane" },

            ].map((item, index) => (
                <motion.div className=""
                    key={index}
                    
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}

                >
                    <img key={index} className='md:w-[210px] lg:w-[250px] w-full h-[180px] rounded-md' src={item.img} alt={item.text} />

                    <p className='font-bold mt-2'>{item.index} </p>
                </motion.div>
            ))}
           


        </section>
    )
}

export default Build
