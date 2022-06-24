import React from 'react'
import OrganizersComp from '../components/_organizers/OrganizersComp'
import Head from '../components/seo/Head'

const Organizators = () => {
  const props = {
    'title': 'Organizatorzy Aktywności - Sports City',
    'description': 'Chcesz dodawać swoje aktywności i eventy do aplikacji Sports City? Promuj swoją markę! Zarejestruj się tutaj.',
    'img': 'logo.png',
    'alt': 'Aplikacja Sports City',
  }

  return (
    <>
      <Head props={props} />
      <OrganizersComp />
    </>
  )
}

export default Organizators