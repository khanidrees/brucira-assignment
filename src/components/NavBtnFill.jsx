import React from 'react'

const NavBtnFill = ({children}) => {
  return (
    <button
    className='primary-bg-color rounded-full text-semibold text-white font-sm px-4 py-2'
    >
        {children}
    </button>
  )
}

export default NavBtnFill