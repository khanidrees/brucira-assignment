import React from 'react'

const ContactCard = ({ user }) => {
  return (
    <div className='flex flex-col justify-between'>
        <img src={user?.image} alt='headshot' width={70} height={70}/>
        <p className='font-normal text-[13px] text-slate-400 mt-6'>{user?.intro}</p>
        <p className='font-semibold text-[14px] mt-6'>{user?.name+','+user?.title}</p>
    </div>
  )
}

export default ContactCard