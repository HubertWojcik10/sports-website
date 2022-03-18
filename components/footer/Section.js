import React from 'react'

const Section = ({title, links}) => {
  return (
    <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
            {title}
        </h2>
        <ul className='text-gray-600 dark:text-gray-400'>
            {
                links.map((item, index) => {
                    return (
                        <li key={index} className='mb-4'>
                            <a href={item[1]} className='hover:underline'> {item[0]} </a>                     
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Section