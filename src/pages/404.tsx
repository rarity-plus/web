import * as React from "react"
import SEO from "../components/SEO"

// markup
const NotFoundPage = () => {
  return (
    <>
      <SEO title="404 Not Found" description="404 Not Found page" />
      <div className='w-full flex justify-center items-center relative h-screen'>
      <img src={'header-image.jpg'} className='absolute opacity-25 w-full pointer-events-none object-cover h-full' />

      <div className='flex flex-col justify-center items-center text-4xl space-y-5 flex-shrink'>
        <h1 className='font-skranji font-bold text-center'>404 Not Found</h1>
      </div>
    </div>
    </>
  )
}

export default NotFoundPage
