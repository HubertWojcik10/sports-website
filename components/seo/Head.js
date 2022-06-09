import React from 'react'
import Head from 'next/head'
import TwitterCard from './TwitterCard'
import OgTags from './OgTags'

const ICON = '/logo.png'

const HeadSEO = ({props}) => {
  return (
    <Head>
        <title> {props.title} </title>
        <meta charset='utf-8' />
        <meta name='description' content={props.description} />
        <link rel='icon' href={ICON} />
        <OgTags props={props} />
        <TwitterCard props={props} />

        {
          props.structuredData !== undefined ?
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(props.structuredData) }}
          /> : null
        }
    </Head>
  )
}

export default HeadSEO