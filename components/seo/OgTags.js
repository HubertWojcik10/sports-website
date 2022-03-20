import React from 'react'

const OgTags = ({props}) => {
  const TYPE = 'website'
  return (
    <>
        <meta property='og:title' content={props.title} />
        <meta property='og:type' content={TYPE} />
        <meta property='og:description'content={props.description} />
        <meta property='og:image' content={props.img}/>
    </>
  )
}

export default OgTags