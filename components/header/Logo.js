import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='mr-16 text-2xl font-semibold whitespace-nowrap'>
        <Link href='/'>
            Company
        </Link>
    </div>
  )
}

export default Logo