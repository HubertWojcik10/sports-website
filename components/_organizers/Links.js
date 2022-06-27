import Link from 'next/link'
import React from 'react'

const Links = ({data}) => {
  return (
    <div className='text-sm flex flex-col text-gray-500'>
        <Link href={'/zostan-organizatorem'}>
            <a className='text-main hover:text-hovermain font-bold my-8'>
                {data.become_organizer}
            </a>
        </Link>

        <hr />
        <Link href={'/logowanie'}>
            <a className='cursor-pointer hover:text-gray-800 mt-2 font-semibold'>
                {data.login}
            </a>
        </Link>
        <Link href={'/kontakt'}>
            <a className='cursor-pointer mt-3 hover:text-gray-800 font-semibold'>
                {data.ask_question}
            </a>
        </Link>
    </div>
  )
}

export default Links