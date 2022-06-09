import React from 'react'
import Link from 'next/link'
import { COMPANY_NAME } from '../../data/variables'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='mr-16 text-2xl font-semibold whitespace-nowrap'>
        <Link href='/'>
            <Image
                src='/logo.png'
                width='40'
                height='40'
            />
        </Link>
    </div>
  )
}

export default Logo