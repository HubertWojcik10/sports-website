import React from 'react'
import Link from 'next/link'

const Icon = ({path}) => {
  return (
    <div className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
        <Link href=''>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path fillRule='evenodd' d={path} clipRule='evenodd'></path>
            </svg>
        </Link>
    </div>
  )
}

export default Icon