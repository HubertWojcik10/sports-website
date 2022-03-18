import React from 'react'
import Logo from './Logo'
import { Popover } from '@headlessui/react'
import Hamburger from './mobile/Hamburger'
import MobileMenu from './mobile/MobileMenu'
import Nav from './Nav'
import CallToAction from './CallToAction'

const Header = () => {
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10'>
          <div className='flex'>
            <Logo />
            <Nav />
          </div>
          <CallToAction />

          <Hamburger /> 
        </div>
      </div>

      <MobileMenu />
    </Popover>
  )
}
export default Header
