import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const Hero = () => {
  return (
    <div>
        <div className='text-start font-semibold text-[36px] md:text-[104px] mt-[122px]'>
            <p >WE ARE A</p>
            <p>GLOBAL <span className='text-primary'>PRODUCTION</span></p>
            <p>AGENCY</p>
        </div> 
        <div className='flex justify-between items-center md:items-end flex-col md:flex-row'>
            <div className='w-4/5 md:w-3/5'>
                <p 
                className='font-semibold text-sm md:text-2xl text-start mb-10'
                >Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.</p>
                <div className='flex flex-col md:flex-row gap-4 md:gap-0'>
                    <PrimaryBtn>GET PROFESSIONAL VIDEO SERVICES</PrimaryBtn>
                    <img className='ml-2 self-center' src='headshots.svg'/>
                    <div className='flex flex-row md:flex-col justify-center ml-3'>
                        <p className='font-medium text-base'>Marin / Ayesha</p>
                        <p className='font-medium text-base text-slate-400'>Global Services</p>
                    </div>
                </div>
                
            </div>
            <div className="bg-showcase-bg w-[256px] h-[138px] rounded-l flex justify-center items-center">
                <button
                className='bg-white bg-opacity-15 rounded-full font-medium text-white text-[14px] px-11 py-3 flex justify-center items-center'
                >
                    <img  className='inline-block pl-2' src='play-icon.svg' />
                    Play Showreel
                </button>
            </div>
        </div>          
    </div>
    
  )
}

export default Hero