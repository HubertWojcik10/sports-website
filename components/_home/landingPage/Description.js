import React from 'react'

const Description = ({description}) => {
  return (
    <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0 lg:w-4/5'>
      {description}
    </p>
  )
}

export default Description