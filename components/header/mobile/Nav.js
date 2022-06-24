import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Link href='/jak-dziala-sports-city'>
            Jak działamy?
        </Link>
        <Link href='/organizatorzy'>
            Organizatorzy
        </Link>
        <Link href='/kontakt'>
            Kontakt
        </Link>
    </div>
  )
}

export default Nav