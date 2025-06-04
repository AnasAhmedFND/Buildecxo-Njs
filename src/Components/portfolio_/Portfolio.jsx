'use client';
import React, { useState } from 'react'

const portfolios = {
    "All" : [
        "/portfolio/pr1.png",
        "/portfolio/pr2.png",
        "/portfolio/pr3.png",
        "/portfolio/pr4.png",
        "/portfolio/pr5.png",
        "/portfolio/pr6.png"       
    ],

    "Business" : [
        "/portfolio/pr4.png",
        "/portfolio/pr3.png",
        "/portfolio/pr2.png",
        "/portfolio/pr1.png"
    ],
    
    "TECHNOLOGY" : [
        "portfolio/t1.jpg",
        "portfolio/t2.jpg", 
        "portfolio/t3.jpg" 
    ],

    "UI/UX DESIGN" : [
        "portfolio/u1.jpeg",
        "portfolio/u2.jpeg",
        "portfolio/u3.jpeg"
    ],

    "WEB DESIGN" : [
        "portfolio/w1.jpeg",
        "portfolio/w2.jpeg",
        "portfolio/w3.jpeg",

    ], 

    "DEVELOPMENT" : [
        "portfolio/dv1.jpeg",
        "portfolio/dv2.jpeg",
        "portfolio/dv3.jpeg"

    ]
    

    
}

const Portfolio = () => {

    const [activePort, setActivePort] = useState('All');



  return (
   <section className='container mx-auto py-10'>
    <div className="">
        <div className="flex ">
            <div className="w-1/2 ">
                <p className='text-red-500 text-[12px] '>Our best portfolio</p>
                <h2 className='font-bold text-3xl mt-2'>Our portfolio</h2>

            </div>

            <div className="w-1/2 text-end text-[14px] ">
                <p>We’ve grown up with the internet revolution, and we know <br /> how to deliver on its promise of improved business</p>
            </div>

        </div>

        
            <ul className='flex gap-8 font-bold mt-6'>
                {Object.keys(portfolios).map((portfolio) => (
                    <li key={portfolio} className={`  px-4 py-2 rounded-full hover:text-white hover:bg-[#ff6600] cursor-pointer ${activePort === portfolio ? 'bg-[#ff6600] text-white ' : 'bg-[#E0DDE5] ' } `}

                    onClick={() =>setActivePort(portfolio) }
                    >
                        {portfolio}
                    
                    </li>

                )) }

             
            </ul>        

    </div>



    <div className="mt-8 flex flex-wrap gap-8 ">
        {  portfolios[activePort].map((imgSrc, index) => (
             <img key={index} className='w-[319.5px] h-[321px] rounded-sm ' src={imgSrc} alt={`Imges ${index + 1} `} />

            ))
        }
      
    </div>

    <div className="flex justify-center items-center mt-10">
    <button className=' bg-[#ff6600] px-5 py-2 rounded-full  text-white '>LOAD MORE</button>

    </div>


   </section>
  )
}

export default Portfolio
