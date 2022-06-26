import Image from 'next/image'
import React from 'react'

const Item = ({data}) => {
  return (
    <div className='mt-10 sm:flex'>
        <div className='bg-lightmain text-black p-4 rounded w-full mr-5'>
            <h3 className='text-xl font-bold'> {data.title} </h3>
            <p className='mt-3'>
                {data.description}
            </p>
        </div>
        <div className='shadow-2xl w-3/5 h-[400px] sm:w-96 mx-auto my-auto relative mt-4 sm:mt-0'>
            <Image
                src={data.img}
                alt={`${data.title}-image`}
                layout='fill'
                objectFit='cover'
                className='rounded-md shadow-2xl'
                priority
            />
        </div>
    </div>
  )
}

export default Item