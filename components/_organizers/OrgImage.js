import Image from 'next/image'
import React from 'react'

const OrgImage = () => {
  return (
    <div className='mt-10 sm:mt-0 block shadow-2xl w-full h-[500px] sm:ml-10 sm:h-96 sm:w-96 relative'>
        <Image
            src='/football.jpg'
            alt='a person playing football'
            layout='fill'
            objectFit='cover'
            className='rounded-md shadow-2xl'
            priority
        />
    </div>
  )
}

export default OrgImage

/*

        */