import React from 'react'
import OrganizersComp from '../components/_organizers/OrganizersComp'
import Head from '../components/seo/Head'

const seoProps = {
  'title': 'Organizatorzy Aktywności - Sports City',
  'description': 'Chcesz dodawać swoje aktywności i eventy do aplikacji Sports City? Promuj swoją markę! Zarejestruj się tutaj.',
  'img': 'logo.png',
  'alt': 'Aplikacja Sports City',
}

const Organizators = () => {
  return (
    <>
      <Head props={seoProps} />
      <OrganizersComp />
    </>
  )
}

export default Organizators