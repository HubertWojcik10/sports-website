import React from 'react'

const heading = [
    'Napisz do nas!',
    'Write us!'
]

const Content = ({lan=0}) => {
  return (
    <h1 className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
        {heading[lan]}
    </h1>
  )
}

export default Content