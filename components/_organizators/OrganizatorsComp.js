import React from 'react'
import Header from '../header/Header'
import PageDescription from '../universal/pages/PageDescription'
import PageTitle from '../universal/pages/PageTitle'

const OrganizatorsComp = () => {
  return (
    <>
        <Header />
        <main className='lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-40'>
            <PageTitle title='Organizatorzy' />
            <PageDescription description='' />
        </main>
    </>
  )
}

export default OrganizatorsComp