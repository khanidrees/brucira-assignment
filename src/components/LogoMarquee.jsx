import React from 'react'
import { companyList } from '../../util/constansts'

const LogoMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden my-[120px]">
        <div className="animate-marquee whitespace-nowrap flex">
          {
            companyList?.map((c,idx)=>{
              return <img className='mr-14'  key={idx} src={'logo/'+c+'.svg'}/>
            })
          }    
        </div>
        <div className="absolute top-0  animate-marquee2 whitespace-nowrap flex">
          {
            companyList?.map((c,idx)=>{
              return <img className='mr-14'  key={idx} src={'logo/'+c+'.svg'}/>
            })
          }    
        </div>
      </div>  
    )
}

export default LogoMarquee