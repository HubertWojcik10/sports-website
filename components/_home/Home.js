import React from 'react'
import Content from './landingPage/Content'
import MainImage from './landingPage/MainImage'

const Home = () => {
  return (
    <div className='lg:w-4/5 mx-auto md:flex justify-between pt-20 block px-11 lg:px-0 min-h-screen'>
      <div className='z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
        <Content />
      </div>
      <MainImage />
    </div>
  )
}

export default Home