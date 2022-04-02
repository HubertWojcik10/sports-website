import React from 'react'

const SectionTitle = ({title, styles=''}) => {
  return (
    <h3 className={`text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl uppercase ${styles}`}>
        {title}
    </h3>
  )
}

export default SectionTitle