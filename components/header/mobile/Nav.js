import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Link href='/'
            className='text-base font-medium text-gray-500 hover:text-gray-900' >
            SubPage
        </Link>
        <Link href='/'
            className='text-base font-medium text-gray-500 hover:text-gray-900' >
            SubPage
        </Link>
    </div>
  )
}

export default Nav