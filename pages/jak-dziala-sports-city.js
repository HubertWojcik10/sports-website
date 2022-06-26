import React from 'react'
import HeadSEO from '../components/seo/Head'
import GuideComp from '../components/_guide/GuideComp'
import seo from '../data/seo/guide.json'


const Guide = () => {
  return (
    <>
      <HeadSEO props={seo}/>
      <GuideComp />
    </>
  )
}

export default Guide