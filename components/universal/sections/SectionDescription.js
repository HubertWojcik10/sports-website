import React from 'react'

const SectionDescription = ({description}) => {
  return (
    <p className='mt-3 text-sm sm:mt-5 sm:text-lg sm:max-w-xl text-gray-500 sm:mx-auto md:mt-5 md:text-base lg:mx-0 lg:w-4/5'>
        {description}
    </p>
  )
}

export default SectionDescription