import React from 'react'

const SloganMarquee = () => {
  return (
    <div className="relative -left-20 flex bg-black mt-[96px] w-[100vw] overflow-x-visible">
        <div className="animate-marquee whitespace-nowrap my-[46px] font-medium text-[68px] text-white">
            <span> UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>
            <span> UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>    
        </div>
        <div className="absolute top-0 left-2 animate-marquee2 whitespace-nowrap my-[46px] font-medium text-[68px] text-white">
            <span>  UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>
            <span> UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>
        </div>
    </div>    
  )
}

export default SloganMarquee;