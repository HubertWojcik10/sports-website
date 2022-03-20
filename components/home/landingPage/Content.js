import React from 'react'
import Description from './Description'
import HomeCallToAction from './HomeCallToAction'
import Title from './Title'

const Content = () => {
  return (
    <div className='flex-col mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex lg:text-left'>
        <Title />
        <Description />
        <HomeCallToAction />
    </div>
  )
}

export default Content