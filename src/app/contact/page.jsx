import Contacts from '@/Components/Contact_/Contacts'
import Hero from '@/Components/hero_/Hero'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>

    <Hero page_title={"Contact"} page={ <Link href={"/"}>Home </Link>} />
    <Contacts />
       
      
    </>
  )
}

export default page
