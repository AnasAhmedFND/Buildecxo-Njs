import Portfolio from '@/Components/portfolio_/Portfolio'
import React from 'react'
import Hero from '@/Components/hero_/Hero'

const page = () => {
  return (
    <>
     <Hero page_title={"Portfolio"} page={'Contact'} />

    <Portfolio />
      
    </>
  )
}

export default page
