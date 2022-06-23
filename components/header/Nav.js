import React from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

const Nav = () => {
  return (
    <Popover.Group as='nav' className='hidden md:flex space-x-10 items-end'>
        <Link href='/jak-dziala-sports-city'>
            Jak działamy?
        </Link>
        <Link href='/organizatorzy'>
            Organizatorzy
        </Link>
    </Popover.Group>
  )
}

export default Nav