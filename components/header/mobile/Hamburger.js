import React from 'react'
import { Popover } from '@headlessui/react'
import {
    MenuIcon,
  } from '@heroicons/react/outline'


const Hamburger = () => {
  return (
    <div className='-mr-2 -my-2 md:hidden text-white'>
        <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6 text-white' aria-hidden='true' />
        </Popover.Button>
    </div>
  )
}

export default Hamburger