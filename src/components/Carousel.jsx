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
        <div  className='flex gap-8 flex-col md:flex-row '>
                    {/* <div className=''> */}
                        <img className='object-cover w-[400px] h-[200px] md:w-[488px] md:h-[517px] ' src={testimonies[currIdx]?.image} alt='headshot'/>
                    {/* </div> */}
                    <div className='flex flex-col justify-between h-[250px] md:h-auto w-full'>
                        <p className='text-start font-semibold text-[14px] md:text-[24px]'>{testimonies[currIdx]?.testimony}</p>
                        <div className='flex justify-between text-start '>
                            <div>
                                <p className='font-bold text-[18px] md:text-[28px] '>{testimonies[currIdx]?.name+','}<sub>{' '+testimonies[currIdx]?.company}</sub></p>
                                <p className='font-bold text-[14px] md:text-[18px] text-slate-400'>{testimonies[currIdx]?.title}</p>
                            </div>
                            <div>
                                <button 
                                className='rounded-full px-4 py-2 md:px-6 md:py-4 border-2 border-red-500'
                                onClick={handlePrev}
                                ><img src='prev.svg'/></button>
                                <button
                                className='primary-bg-color rounded-full px-4 py-2 md:px-6 md:py-4 border-2 border-white'
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