import React from 'react'
import Header from '../header/Header'
import ContactForm from './ContactForm'
import PageTitle from '../universal/pages/PageTitle'
import PageDescription from '../universal/pages/PageDescription'
import data from '../../data/pages/contact.json'

const ContactComp = () => {
  return (
    <>
      <Header />

      <main className='lg:w-4/5 mx-auto py-10 px-3 min-h-screen pt-32 sm:pt-40'>      
        <PageTitle title={data.title} />
        <PageDescription description={data.description} />

        <ContactForm />
      </main>
    </>
  )
}

export default ContactComp