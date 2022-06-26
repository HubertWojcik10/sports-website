import React from 'react'
import HeadSEO from '../components/seo/Head'
import ContactComp from '../components/_contact/ContactComp'
import seo from '../data/seo/contact.json'

const Contact = () => {
  return (
    <>
        <HeadSEO props={seo} />
        <ContactComp />
    </>
  )
}

export default Contact