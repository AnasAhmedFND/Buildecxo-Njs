import About_servics from '@/Components/About_/About_servics'
import Contractors from '@/Components/About_/Contractors'
import Hero from '@/Components/hero_/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero page_title={"About"} page={'Blog'} />
       <Contractors />
       <About_servics />
       
    </div>
  )
}

export default page

