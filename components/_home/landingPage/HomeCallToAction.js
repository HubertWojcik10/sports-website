import React from 'react'
import Link from 'next/link'

const HomeCallToAction = ({cta, org}) => {
  return (
    <div className='mt-5'>
          <Link href='/' className=''>
            <div className='shadow px-8 mr-2 py-3 text-sm font-semibold text-center rounded-md text-white bg-main hover:bg-hovermain md:py-2 md:text-base md:px-10 mb-5'>
              {cta}
            </div>
          </Link>
          <Link href='/zostan-organizatorem' className='w-full flex items-center justify-center'>
            <u className='pt-5 text-black cursor-pointer'>
              {org}
            </u>
          </Link>
    </div>
  )
}

export default HomeCallToAction