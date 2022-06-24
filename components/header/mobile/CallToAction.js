import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-main hover:bg-hovermain w-full'>
       <Link href='/login'>
              Zaloguj się
        </Link>
    </div>
  )
}

export default CallToAction