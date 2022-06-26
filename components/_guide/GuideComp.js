import React from 'react'
import Header from '../header/Header'
import PageTitle from '../universal/pages/PageTitle'
import PageDescription from '../universal/pages/PageDescription'
import PageSubTitle from '../universal/pages/PageSubTitle'
import data from '../../data/pages/guide.json'
import Item from './Item'

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
                  <Item key={index} data={item} />
                )
              })
            }
         </main>
    </>
  )
}

export default GuideComp