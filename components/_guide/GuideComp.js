import React from 'react'
import Header from '../header/Header'
import PageTitle from '../universal/pages/PageTitle'
import PageDescription from '../universal/pages/PageDescription'
import PageSubTitle from '../universal/pages/PageSubTitle'
import data from '../../data/pages/guide.json'

const GuideComp = () => {
  return (
    <>
        <Header />
        <main className='lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-40'>
            <PageTitle title={data.title} />
            <PageSubTitle subtitle={data.subtitle} />
            <PageDescription description={data.description} />

            {
              data.guide.map((item, index) => {
                //TODO
                return (
                  <div key={index} className='flex flex-col items-center justify-center'>
                    {item.title}
                  </div>)
              })
            }
         </main>
    </>
  )
}

export default GuideComp