import React from 'react'

const Heading = ({children}) => {
  return (
    <div className='mt-[128px] text-start'>
        <span className='title py-[10px] pl-1 font-semibold text-primary'>{children}</span>
      </div>
  )
}

export default Heading