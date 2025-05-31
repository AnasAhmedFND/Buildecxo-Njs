import React from 'react'

const Contractors = () => {
    return (
        <section className='container mx-auto border py-10 flex '>
            <div className="border w-[60%] ">
                <p>About Our Company</p>
                <h2>A team of reliable and <br /> experienced Contractors</h2>
                <p>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia sit <br />
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. am Neque <br />
                    porro dolor set quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, <br />
                    adipisci velit, sed quia non numquam</p>

                <div className="">
                    <div className="flex gap-5 mt-2 border bg-[#daa1da] py-2 px-2 ">
                        <p>Our Mission </p>
                        <p>Our Vision </p>
                        <p>Our Value </p>
                    </div>
                    <p className=' overflow-x-scroll border'>An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes <br />
                        your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves <br />
                        and their IT from falling apart. We’ve raised</p>
                </div>

                <div className=" ">
                    <button>Learn more</button>
                    <div className="">
                        <img src="/about/call-about.png" alt="call" />
                    </div>
                </div>

            </div>


            <div className="border w-[40%] relative">
            <img className='w-[380px] h-[480px]  ml-6  mt-4' src="/about/before.png" alt="background" />
            <img className='w-[380px] h-[480px] absolute top-0 left-2 ' src="/about/about-1.png" alt="man" />
            </div>


        </section>
    )
}

export default Contractors
