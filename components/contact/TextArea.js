import React from 'react'

const TextArea = ({label}) => {
  return (
    <div className="w-full flex flex-col mt-8">
        <label className="text-base font-semibold leading-none text-gray-800"> {label} </label>
        <textarea name={label} tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
    </div>
  )
}

export default TextArea