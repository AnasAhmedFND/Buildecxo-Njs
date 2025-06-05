import React from 'react'

const About_team = () => {
    return (
        <section className='container mx-auto md:pt-10 mt-5 md:py-10 py-5 md:h-[600px] h-[1500px] md:flex justify-between px-2 md:px-0 '>
            <div className=" md:w-[30%]  h-[430px] relative mt-10   ">
                <div className=" bg-[yellow] h-[290px] mt-[50px] rounded-t-[100px]  ">      </div>
                <img className=' absolute md:-top-10 -top-[90px] w-full h-[380px] ' src="/home/tm1.png" alt="" />

                <div className="py-5 pl-2 bg-[#F2F2F2] w-[80%] rounded-bl-4xl   ">
                    <h5 className='font-bold'>Marc Chiasson </h5>
                    <p className=''>Head Railway Construction </p>
                </div>

            </div>

            <div className=" md:w-[30%]  h-[400px] relative md:mt-10 mt-20  ">
                <div className=" bg-[yellow] h-[290px] mt-[50px] rounded-t-[100px] ">      </div>
                <img className=' absolute md:-top-10 -top-[90px] w-full h-[380px]  ' src="/home/tm2.png" alt="" />

                <div className="py-5 pl-2 bg-[#F2F2F2] w-[80%] rounded-bl-4xl   ">
                    <h5 className='font-bold'>Marc Chiasson </h5>
                    <p className=''>Head Railway Construction </p>
                </div>

            </div>

            <div className=" md:w-[30%] h-[400px] relative md:mt-10  mt-20  ">
                <div className=" bg-[yellow] h-[290px] mt-[50px] rounded-t-[100px] ">      </div>
                <img className=' absolute md:-top-10 -top-[90px] w-full h-[380px] ' src="/home/tm3c.png" alt="" />

                <div className="py-5 pl-2 bg-[#F2F2F2] w-[80%] rounded-bl-4xl ">
                    <h5 className='font-bold'>Marc Chiasson </h5>
                    <p className=''>Head Railway Construction </p>
                </div>

            </div>

        </section>
    )
}

export default About_team
