import React from 'react'

const TwitterCard = ({props}) => {
  return (
    <>
        <meta name='twitter:title' content={props.title}/>
        <meta name='twitter:description' content={props.description}/>
        <meta name='twitter:image' content={props.img}/>
        <meta name='twitter:image:alt' content={props.alt}/>
    </>
  )
}

export default TwitterCard