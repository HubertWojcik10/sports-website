import React from 'react'

const Input = ({label, handleChange, styles='',}) => {
  return (
    <div className={`md:w-1/2 mt-3 md:mt-0 flex flex-col md:ml-1 w-full`}>
        <label className='text-base font-semibold leading-none text-gray-800'> {label} </label>
        <input name={label} tabIndex={0} arial-label='Please input name' type='name' className='text-base leading-none text-gray-900 p-3 focus:oultine-none focus:hoverblue mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 w-full' placeholder='Please input  name'
        onChange={e => handleChange(e)} />
    </div>
  )
}

export default Input