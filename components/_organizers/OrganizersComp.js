import React from 'react'
import Header from '../header/Header'
import PageDescription from '../universal/pages/PageDescription'
import PageTitle from '../universal/pages/PageTitle'
import data from '../../data/pages/organizers.json'
import OrgImage from './OrgImage'
import Link from 'next/link'
import Links from './Links'

const OrganizatorsComp = () => {
  return (
    <>
        <Header />
        <main className='block sm:flex sm:flex-row lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-32 sm:pt-40'>
          <div>
            <PageTitle title={data.title} />
            <PageDescription description={data.description} />
            <PageDescription description={data.description2} />

            <Links data={data} />
          </div>

          <OrgImage />
        </main>
    </>
  )
}

export default OrganizatorsComp