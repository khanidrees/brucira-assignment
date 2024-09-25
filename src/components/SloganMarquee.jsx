import React from 'react'

const SloganMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-black mt-[96px]">
        <div className="animate-marquee whitespace-nowrap my-[46px] font-medium text-[68px] text-white">
            <span> UNL</span><span>EASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> |</span>    
        </div>
        <div className="absolute top-0  animate-marquee2 whitespace-nowrap my-[46px] font-medium text-[68px] text-white">
            <span> UNL</span><span>EASH</span>
            <span> VISUAL</span>
            <span> IMPACT</span>
            <span> |</span>
        </div>
    </div>    
  )
}

export default SloganMarquee;