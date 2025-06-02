import About_servics from '@/Components/About_/About_servics'
import About_team from '@/Components/About_/About_team'
import Contractors from '@/Components/About_/Contractors'
import Great_building from '@/Components/About_/Great_building'
import Hero from '@/Components/hero_/Hero'
import React from 'react'

const page = () => {
  return (
    <>
       <Hero page_title={"About"} page={'Portfolio'} />
       <Contractors />
       <About_servics />
       <Great_building />
       <About_team />
       
    </>
  )
}

export default page

