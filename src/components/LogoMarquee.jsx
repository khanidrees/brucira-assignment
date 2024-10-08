import React from 'react'
import { companyList } from '../../util/constansts'

const LogoMarquee = () => {
  return (
    <div className="relative flex my-8 md:my-[120px] w-full">
        <div className="animate-marquee whitespace-nowrap flex gap-4 items-center md:gap-0 ">
          {
            companyList?.map((c,idx)=>{
              return <span key={idx}> <img className='mr-14'   src={'logo/'+c+'.svg'}/></span>
            })
          }    
        </div>
        <div className="absolute top-0  animate-marquee2 whitespace-nowrap flex gap-4 items-center md:gap-0">
          {
            companyList?.map((c,idx)=>{
              return <span key={idx}><img className='mr-14 w-'  key={idx} src={'logo/'+c+'.svg'}/></span>
            })
          }    
        </div>
      </div>  
    )
}

export default LogoMarquee