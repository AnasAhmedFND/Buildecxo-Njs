import React from 'react'

const Team = () => {
    return (
        <section className='container mx-auto flex justify-between py-5'>
            <div className="w-[30%]   ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm1.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div>

             <div className="w-[30%]  ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm2.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div> 

            <div className="w-[30%]  ">
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm3.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4] ">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </div>


        </section>
    )
}

export default Team
