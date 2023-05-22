import React from 'react'

export default function PrimaryButton({children, onClick, ...props}) {
  return (
    <button onClick={onClick} className="bg-primary text-white p-5 mx-2 py-3 px-10 hover:bg-white hover:text-primary border" {...props}>
        {children}
    </button>
  )
}
