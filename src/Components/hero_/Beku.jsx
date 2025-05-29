import React from 'react'
import { TbPhoneCall } from "react-icons/tb";

const Beku = () => {
    return (
        <section className='container mx-auto py-4  relative'>
            <img className='w-full h-[400px]  ' src="/home/ft-2.jpg" alt="beku" />
            <div className="flex gap-40 border w-full absolute top-5 justify-end items-end ">
                <div className="flex gap-5 border px-4 w-[30%] h-[80px] bg-black rounded-full py-2 relative  ">
                    <img className='w-[60px] h-[60px] border rounded-full ' src="/home/electri-man.jpg" alt="" />
                    <div className="font-bold text-white ">
                        <p className='text-red-800  text-[12px] '>CALL TITle</p>
                        <p>PHONE NUMBER</p>
                        <p className='absolute top-4 text-xl border bg-white rounded-full text-green-700 left-16 w-[30px] h-[30px] flex items-center justify-center'><TbPhoneCall /> </p>
                    </div>
                </div>

                <div className="">
                    <img className='w-[200px] ' src="/home/ft1.png" alt="" />
                    <p className='text-white'>For over 80 years, We have been the <br />trusted name in heating, air conditioning <br />
                        and plumbing businesses.</p>
                        <button className='font-bold border bg-[#ff6600] text-white px-5 py-4 rounded-md mt-5 '>MORE EXPLORE</button>


                </div>
            </div>



        </section>
    )
}

export default Beku
