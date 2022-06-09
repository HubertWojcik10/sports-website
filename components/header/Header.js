import React from 'react'
import Logo from './Logo'
import { Popover } from '@headlessui/react'
import Hamburger from './mobile/Hamburger'
import MobileMenu from './mobile/MobileMenu'
import Nav from './Nav'
import CallToAction from './CallToAction'

const Header = () => {
  return (
    <Popover className='bg-main rounded-b fixed w-screen z-50 shadow-2xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center py-3 md:space-x-10'>
          <div className='flex items-center text-white'>
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
