import React from 'react'

const AnalyticsComponent = ({children,number}) => {
  return (
    <div className='flex flex-col'>
        <div>
            <p className='font-medium text-[24px] md:text-[86px]'>{number}<span className='text-primary'>+</span></p>    
        </div>  
        <div className='text-start font-medium text-[16px] md:text-[24px]'>
            {children}    
        </div>  
    </div>
  )
}

export default AnalyticsComponent