import React from 'react'

const Portfolio = () => {
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
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>SEE ALL</li>
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>BUSINESS</li>
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>TECHNOLOGY</li>
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>UI/UX DESIGN</li>
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>WEB DESIGN</li>
              <li className=' bg-[#E0DDE5] px-4 py-2 rounded-full hover:text-white cursor-pointer '>DEVELOPMENT</li>
            </ul>        

    </div>



    <div className="mt-8 flex flex-wrap gap-8 ">
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr1.png" alt="tem" />
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr2.png" alt="tem" />
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr3.png" alt="tem" />
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr4.png" alt="tem" />
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr5.png" alt="tem" />
        <img className='w-[319.5px] h-[321px] ' src="/portfolio/pr6.png" alt="tem" />

    </div>

    <div className="flex justify-center items-center mt-10">
    <button className=' bg-[#ff6600] px-5 py-2 rounded-full  text-white '>LOAD MORE</button>

    </div>


   </section>
  )
}

export default Portfolio
