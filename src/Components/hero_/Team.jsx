"use client";


import {motion} from 'framer-motion'

const Team = () => {  

    return (
        <section className='container mx-auto py-2 md:px-0 px-2  '>
            <h3 className='font-bold text-2xl md:block border-b-2 pb-2 '>Team</h3>
            

            {/* {team items}...................... */}
            <div className=" md:flex justify-between md:py-5 ">

                {/* Left */}

            <motion.div className=" md:w-[30%] w-full   "

                initial={{ y:150, scale:0.5, opacity: 0 }}
                    whileInView={{ y: 0, scale:1 , opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}  

            >
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm1.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </motion.div>

            {/* Medil */}

             <motion.div className="md:w-[30%] w-full md:mt-0 mt-2 "

                 initial={{ y: 50,scale:0.5, opacity: 0 }}
                    whileInView={{ y: 0,scale:1,  opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}  

             >
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm2.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4]">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </motion.div> 

            {/* Right */}

            <motion.div className="md:w-[30%] w-full md:mt-0 mt-2 "

               initial={{ y: 150, scale:0.5, opacity: 0 }}
                    whileInView={{ y: 0, scale:1 , opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 50 }}  


            >
                <img className='h-[350px] w-full bg-white shadow-[#533853] shadow-xl ' src="/home/tm3.png" alt="team" />
                <div className="pl-2 py-2 bg-[#F9F4F4] ">
                    <h5 className='font-bold'>Marc Chiasson</h5>
                    <p>Marc Chiasson</p>

                </div>
            </motion.div>


            </div>

        </section>
    )
}

export default Team
