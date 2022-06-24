import React from 'react'

const PageDescription = ({description, styles=''}) => {
  return (
    <p className={`mt-3 text-sm sm:mt-5 sm:text-lg text-gray-500 sm:mx-auto md:mt-5 md:text-base ${styles}`}>
        {description}
    </p>
  )
}

export default PageDescription