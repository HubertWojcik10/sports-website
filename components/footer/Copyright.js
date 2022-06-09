import React from 'react'
import Link from 'next/link'
import { COMPANY_NAME } from '../../data/variables'

const Copyright = () => {
  const year = new Date().getFullYear()

  return (
    <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © {year}{' '} 
        <Link href='/' className='hover:underline'><span>{COMPANY_NAME}™</span></Link>. All Rights Reserved.
    </span>
  )
}

export default Copyright