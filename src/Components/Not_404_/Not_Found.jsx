import Link from 'next/link'
import React from 'react'

const Not_Found = () => {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center py-10 '>
        <img className='w-[60%]  ' src="/contact/404.png" alt="" />

        <h5 className='font-bold text-xl flex justify-center mt-5 '>Oops! Page Not found.</h5>
        <Link href={'/'}>
        <button className='border px-5 py-2 bg-[#ff6600] rounded-2xl mt-4 font-bold text-white cursor-pointer '>Back to Home page</button>

        </Link>
    </section>
  )
}

export default Not_Found
