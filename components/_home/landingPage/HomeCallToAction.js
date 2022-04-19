import React from 'react'
import Link from 'next/link'

const HomeCallToAction = () => {
  return (
    <div className='mt-5 sm:flex sm:justify-center lg:justify-start'>
          <Link href='/'
            className='w-full flex items-center justify-center'>
            <div className='shadow px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main hover:bg-hovermain md:py-4 md:text-lg md:px-10'>
              Get Started
            </div>
          </Link>
    </div>
  )
}

export default HomeCallToAction