import React from 'react'

const Contacts = () => {
    return (
        <section className='container mx-auto  py-10 px-2 md:px-0 '>
            {/* page top items .................................*/}
            <div className=" md:flex md:h-[800px] justify-between ">
                <div className=" md:w-[48%] relative ">
                    <p className='text-red-500 text-[10px] '>Great Experience in building</p>
                    <h2 className='font-bold text-4xl '>Frequntly Asked <br /> Any Questions</h2>

                    <img className='w-full mt-10' src="/contact/fac1.png" alt="contact" />
                    <img className='absolute bottom-0 w-[70%] ' src="/contact/fac2.png" alt="contact" />

                </div>

                <div className=" md:w-[48%] ">
                    <p className='text-[14px] flex justify-end '>Aliquam tempus libero eget arcu euismod, in bibendum nisl <br /> posuere. Donec gravida sem eu dolor rhoncus viverra. In vel <br />
                        cursus ante.</p>
                    <h5 className='mt-8 font-bold text-xl flex justify-between'>What is Agency ? <span className='text-red-500 text-xl font-bold '>+</span> </h5>

                    <h6 className='font-bold text-xl pt-3 border-t mt-3 flex justify-between items-center '>Nulla vitae est risus. Aenean <br />aliquam dolor a massa <span className='font-bold text-2xl text-red-500'>-</span> </h6>
                    <p className='mt-3 text-[14px] '>Improve efficiency, provide a better customer experience with <br />modern technolo services available around Improve efficiency, <br />
                        provide a better customer experience</p>

                        <h6 className='border-t mt-3 pt-3 font-bold text-xl flex justify-between '>Pellentesque habitant morbi <br />tristique senectus ? <span className='font-bold text-2xl text-red-500'>+</span> </h6>

                        <h6 className='font-bold text-xl mt-3 pt-3 flex justify-between border-t'>Habitant morbi tristique senectus ? <span className='font-bold text-2xl text-red-500'>+</span></h6>
                        <h6 className='font-bold text-xl mt-3 pt-3 flex justify-between border-t'>What should be listed on a  <br />business card? <span className='font-bold text-2xl text-red-500'>+</span></h6>
                        <h6 className='font-bold text-xl mt-3 pt-3 flex justify-between border-t'>Why we are best company? <span className='font-bold text-2xl text-red-500'>+</span></h6>
                        <h6 className='font-bold text-xl mt-3 pt-3 flex justify-between border-t'>How the template process works? <span className='font-bold text-2xl text-red-500'>+</span></h6>
                        <h6 className='font-bold text-xl mt-3 pt-3 flex justify-between border-t'>Comapny mission & vision?<span className='font-bold text-2xl text-red-500'>+</span></h6>

                </div>

            </div>

            <div className=" mt-5 bg-[#F7F7F7] w-[97%] rounded-md md:h-[522px] md:ml-[3%] md:p-10 p-2">
                <h2 className='font-bold text-4xl '>Contact Me</h2>
                <p className='mt-2 text-[14px] '>In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget mauris in nisl tempus lobortis.</p>

                <div className="mt-5 flex flex-wrap gap-3 ">
                    <input className='border p-2 md:w-[48%] w-full rounded-xl outline-none ' type="text" placeholder='Fast Name' />
                    <input className='border p-2 md:w-[48%] w-full rounded-xl outline-none ' type="text" placeholder='Last Name' />
                    <input className='border p-2 md:w-[48%] w-full rounded-xl outline-none ' type="text" placeholder='Email address' />
                    <select className='border p-2 md:w-[48%] w-full rounded-xl outline-none ' name="servics" id=""  >
                        <option value="some">Select Service Type</option>
                        <option value="Development">Development</option>
                        <option value="web">Website Development</option>
                        <option value="marketing">Marketing</option>                        

                    </select>
                </div>

                <textarea className='border h-[180px] w-[96%] mt-5 p-2 rounded-xl bg-white outline-none ' name="text" id="" placeholder='something write... ' >
                    
                </textarea>

                <div className=" flex justify-center mt-4 ">
                <button className='bg-[#ff6600] px-5 py-2  text-white font-bold border rounded-2xl '>SEND MESSAGE </button>

                </div>


            </div>

        </section>
    )
}

export default Contacts
