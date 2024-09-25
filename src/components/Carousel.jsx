import React, { useState } from 'react'
import { testimonies } from '../../util/constansts';

const Carousel = () => {
    const [currIdx, setCurrIdx] = useState(0);
    const handlePrev=()=>{
        setCurrIdx((prev=>prev>0?prev-1:testimonies?.length-1));
    }
    const handleNext=()=>{
        setCurrIdx((prev=>prev<testimonies?.length-1?prev+1:0));
    }
    
  return (
    <div className='mt-9'>
        <div className='flex'>
        <div  className='flex gap-8'>
                    <div className='w-[488px] h-[517px] '>
                        <img className='object-cover' src={testimonies[currIdx]?.image} alt='headshot'/>
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                        <p className='text-start font-semibold text-[24px]'>{testimonies[currIdx]?.testimony}</p>
                        <div className='flex justify-between text-start'>
                            <div>
                                <p className='font-bold text-[28px] '>{testimonies[currIdx]?.name+','}<sub>{' '+testimonies[currIdx]?.company}</sub></p>
                                <p className='font-bold text-[18px] text-slate-400'>{testimonies[currIdx]?.title}</p>
                            </div>
                            <div>
                                <button 
                                className='rounded-full px-6 py-4 border-2 border-red-500'
                                onClick={handlePrev}
                                ><img src='prev.svg'/></button>
                                <button
                                className='primary-bg-color rounded-full px-6 py-4 border-2 border-white'
                                onClick={handleNext}
                                ><img src='next.svg'/></button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Carousel