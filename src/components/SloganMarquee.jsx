import React from 'react'

const SloganMarquee = () => {
  return (
    <div className="relative left-0 md:-left-20 flex bg-black mt-8 md:mt-[96px] w-[100vw] overflow-x-visible">
        <div className="animate-marquee whitespace-nowrap my-6 md:my-[46px] font-medium text-[32px] md:text-[68px] text-white">
            <span> UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>
            <span> UNLEASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> | </span>    
        </div>
        <div className="absolute top-0 left-0 animate-marquee2 whitespace-nowrap my-6 md:my-[46px] font-medium text-[32px] md:text-[68px] text-white">
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