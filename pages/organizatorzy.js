import React from 'react'
import OrganizersComp from '../components/_organizers/OrganizersComp'
import Head from '../components/seo/Head'
import seo from '../data/seo/organizers.json'

const Organizators = () => {
  return (
    <>
      <Head props={seo} />
      <OrganizersComp />
    </>
  )
}

export default Organizators