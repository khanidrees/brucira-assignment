import React from 'react'

const PrimaryBtn = ({children, widthFull=false}) => {
  
    return (
        <button
    className={'primary-bg-color rounded-full font-bold text-white text-sm md:text-[16px] px-3 py-1 md:px-8 md:py-5 flex justify-center items-center '+(widthFull && 'w-full')}
    >
        {children}
        <img  className='inline-block pl-2' src='right-arrow.svg' />
    </button>)
  
}

export default PrimaryBtn