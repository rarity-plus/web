import * as React from "react"
import SEO from "../components/SEO"

// markup
const IndexPage = () => {
  return (
   <div className='w-full flex justify-center items-center relative h-screen'>
      <SEO title="Home" description="Rarity.plus is an upcoming 3D MMORPGer built on top of Rarity Smart Contracts" />
      
      <img src={'/imgs/header-image.jpg'} className='absolute opacity-25 w-full pointer-events-none object-cover h-full' />

      <div className='flex flex-col justify-center items-center text-4xl space-y-5 flex-shrink'>
          <h1 className='font-skranji font-bold text-center'>rarity.plus</h1>
          <h2 className='font-skranji font-bold text-center text-xl'>An upcoming 3D MMORPGer built on top of Rarity Smart Contracts</h2>
          <h2 className='font-skranji font-bold text-center text-base'>Coming Soon!</h2>
      </div>
   </div>
  )
}

export default IndexPage
