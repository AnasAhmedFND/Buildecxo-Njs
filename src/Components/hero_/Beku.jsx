import React from 'react'
import { TbPhoneCall } from "react-icons/tb";

const Beku = () => {
    return (
        <section className='container mx-auto py-4 md:px-0 px-2 relative'>
            <img className='w-full md:h-[400px] h-[500px]  ' src="/home/ft-2.jpg" alt="beku" />

            <div className="md:flex md:gap-40  w-full absolute top-5 justify-end items-end md:px-0 px-2 ">
                <div className="flex md:gap-8 gap-6 border px-4 md:w-[30%] w-[80%] h-[80px] bg-black rounded-full py-2 relative  ">
                    <img className='w-[60px] h-[60px] border rounded-full ' src="/home/electri-man.jpg" alt="" />
                    <div className="font-bold text-white ">
                        <p className='text-red-800  text-[12px] '>CALL TITle</p>
                        <p>PHONE NUMBER</p>
                        <p className='absolute md:top-4 top-2 text-xl border bg-white rounded-full text-green-700 left-16 w-[30px] h-[30px] flex items-center justify-center'><TbPhoneCall /> </p>
                    </div>
                </div>

                <div className="">
                    <img className='w-[200px] ' src="/home/ft1.png" alt="" />
                    <p className='text-white pb-4'>For over 80 years, We have been the <br />trusted name in heating, air conditioning <br />
                        and plumbing businesses.</p>
                        <a href='#factory' className='font-bold border bg-[#ff6600] text-white px-5 py-4 rounded-md mt-5 '>MORE EXPLORE</a>


                </div>
            </div>



        </section>
    )
}

export default Beku
