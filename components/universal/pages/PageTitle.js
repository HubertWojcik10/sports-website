import React from 'react'

const PageTitle = ({title, styles=''}) => {
  return (
    <h1 className={`text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl uppercase ${styles}`}> 
        {title} 
    </h1>
  )
}

export default PageTitle