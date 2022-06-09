import React from 'react'
import Link from 'next/link'
import { COMPANY_NAME } from '../../data/variables'

const FooterLogo = () => {
  return (
    <div className='mb-6 md:mb-0'>
        <Link href='/' className='flex items-center'>
            <div>
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                    {COMPANY_NAME}
                </span>
            </div>
        </Link>
    </div>
  )
}

export default FooterLogo

//<img src='/docs/images/logo.svg' className='mr-3 h-8' alt='Company Logo' />
