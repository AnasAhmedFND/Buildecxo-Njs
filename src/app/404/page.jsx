import React from 'react'
import Hero from '@/Components/hero_/Hero'
import Not_Found from '@/Components/Not_404_/Not_Found'
import Link from 'next/link'
const page = () => {
  return (
    <>
       <Hero page_title={"Note faund"} page={ <Link href={"/"}>Home </Link> } />
       <Not_Found />
    </>
  )
}

export default page
