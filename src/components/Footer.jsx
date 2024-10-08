import React from 'react'

const Footer = () => {
  return (
    <div className='mt-6 md:mt-20'>
        <div className='grid grid-cols-2 md:grid-cols-5'>
            <div className='w-1/5 text-start'>
                <p className='font-medium text-[16px] md:text-[24px] mb-4 md:mb-[26px]'>COMPANY</p>
                <p className='font-normal text-[16px] mb-4'>Who Are We</p>
            </div>
            <div className='w-1/5 text-start'>
                <p className='font-medium text-[16px] md:text-[24px] mb-[26px]'>RESOURCES</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Blog</p>
            </div>
            <div className='w-1/5 text-start'>
                <p className='font-medium text-[16px] md:text-[24px] mb-[26px]'>BLOG</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Video</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Shoot</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Post</p>
            </div>
            <div className='w-1/5 text-start'>
                <p className='font-medium text-[16px] md:text-[24px] mb-4 md:mb-[26px]'>SERVICES</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Video</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Shoot</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Post</p>
            </div>
            <div className='w-1/5 text-start'>
                <p className='font-medium text-[16px] md:text-[24px] mb-4 md:mb-[26px]'>CONTACT</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Talk to us</p>
                <p className='font-normal text-[14px] md:text-[16px] mb-2 md:mb-4'>Collab</p>
            </div>
        </div>
        <div className='flex justify-between font-normal text-[12px] md:text-[16px]'>
            <p>Copyright ©2023 Red Bangle</p>
            <div className='flex gap-8'>
                <p>Privacy Policy</p>
                <p>Legal</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer