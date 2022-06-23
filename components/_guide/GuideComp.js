import React from 'react'
import Header from '../header/Header'
import PageTitle from '../universal/pages/PageTitle'
import PageDescription from '../universal/pages/PageDescription'

const GuideComp = () => {
  return (
    <>
        <Header />
        <main className='lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-40'>
            <PageTitle title='Poradnik' />
            <PageDescription description='' />
         </main>
    </>
  )
}

export default GuideComp