import React from 'react'
import Image from 'next/image'

const MainImage = () => {
  return (
    <div className='shadow-2xl h-72 w-full md:h-3/4vh md:w-96 mx-auto my-auto relative'>
        <Image
            src='/pilates.jpg'
            alt="Picture of the author" //CHANGE
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-2xl	"
            priority
        />
        
    </div>
  )
}

export default MainImage