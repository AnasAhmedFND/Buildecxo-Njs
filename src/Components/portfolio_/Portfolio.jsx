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

    "BUSINESS" : [
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
   <section className='container mx-auto md:py-10 md:px-0 px-2 md:pb-0 pb-4  '>
    <div className="">
        <div className="md:flex ">
            <div className="md:w-1/2 ">
                <p className='text-red-500 text-[12px] '>Our best portfolio</p>
                <h2 className='font-bold md:text-3xl text-2xl md:mt-2  '>Our portfolio</h2>

            </div>

            <div className="md:w-1/2 md:text-end md:text-[14px] text-[12px] ">
                <p>We’ve grown up with the internet revolution, and we know <br /> how to deliver on its promise of improved business</p>
            </div>

        </div>

        
            <ul className='md:flex md:flex-row md:gap-8 md:overflow-hidden overflow-y-scroll flex flex-col gap-2 md:h-auto h-[160px] md:border-none border-t-2 font-bold mt-6 md:pt-0 pt-2'>
                {Object.keys(portfolios).map((portfolio) => (
                    <li key={portfolio} className={` md:mt-0 mt-2  px-4 py-2 rounded-full hover:text-white hover:bg-[#ff6600] cursor-pointer ${activePort === portfolio ? 'bg-[#ff6600] text-white ' : 'bg-[#E0DDE5] ' } `}

                    onClick={() =>setActivePort(portfolio) }
                    >
                        {portfolio}
                    
                    </li>

                )) }

             
            </ul>        

    </div>



    <div className="mt-8 flex flex-wrap md:col-span-3 col-span-2 md:gap-8 gap-3 ">
        {  portfolios[activePort].map((imgSrc, index) => (
             <img key={index} className='md:w-[319.5px] w-[48%] md:h-[321px] h-[200px] rounded-sm ' src={imgSrc} alt={`Imges ${index + 1} `} />

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
