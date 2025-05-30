import React from 'react'

const Team = () => {
    return (
        <section className='container mx-auto py-2'>
            <h3 className='font-bold text-2xl md:block border-b-2 pb-2 '>Team</h3>
            <div className=" md:flex justify-between md:py-5 ">
            <div className="md:w-[30%] w-full   ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm1.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div>

             <div className="md:w-[30%] w-full md:mt-0 mt-2 ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm2.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div> 

            <div className="md:w-[30%] w-full md:mt-0 mt-2 ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm3.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4] ">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div>


            </div>

        </section>
    )
}

export default Team
