import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
      <div className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-main hover:bg-hovermain'>
          <Link href='/'>
              Call to Action
          </Link>
      </div>
    </div>
  )
}

export default CallToAction