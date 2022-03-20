import React from 'react'
import Image from 'next/image'

const MainImage = () => {
  return (
    <div className='shadow-lg h-72 w-full md:h-96 md:w-96 mx-auto my-auto relative'>
        <Image
            src='/memories.png'
            alt="Picture of the author" //CHANGE
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
        />
    </div>
  )
}

export default MainImage