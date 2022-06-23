import React from 'react'


const Title = ({lan=0, title}) => {
  return (
    <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl uppercase'>
        <span className='block xl:inline'> {title.split('*')[0]} </span>{' '}
        <span className='block text-main'> {title.split('*')[1]} </span>{' '}
        <span className='block'> {title.split('*')[2]} </span>{' '}
    </h1>
  )
}

export default Title