import React from 'react'
import Header from '../header/Header'
import PageTitle from '../universal/pages/PageTitle'
import PageSubTitle from '../universal/pages/PageSubTitle'
import data from '../../data/pages/become_organizer.json'
import PageDescription from '../universal/pages/PageDescription'
import OrgForm from './OrgForm'

const BecomeOrganizerComp = () => {
  return (
    <>
      <Header />
      <main className='lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-32 sm:pt-40'>
        <PageTitle title={data.title} />
        <PageSubTitle subtitle={data.subtitle} />
        <PageDescription description={data.description} />

        <OrgForm />
      </main>
    </>
  )
}

export default BecomeOrganizerComp