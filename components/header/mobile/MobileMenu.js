import React from 'react'
import Logo from '../Logo'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import CallToAction from './CallToAction'
import Nav from './Nav'
import CloseIcon from './CloseIcon'


const MobileMenu = () => {
  return (
    <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel focus className='absolute z-10	top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <Logo />
                <CloseIcon />
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <Nav />
              <CallToAction />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
  )
}

export default MobileMenu