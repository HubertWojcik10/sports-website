import React from 'react'

const heading = 'Lorem Ipsum *dolor* sit amet'

const Title = ({lan=0}) => {
  return (
    <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl uppercase'>
        <span className='block xl:inline'> {heading.split('*')[0]} </span>{' '}
        <span className='block text-main'> {heading.split('*')[1]} </span>{' '}
        <span className='block'> {heading.split('*')[2]} </span>{' '}
    </h1>
  )
}

export default Title