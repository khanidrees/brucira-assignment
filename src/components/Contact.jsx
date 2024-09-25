import React from 'react'
import { contactList } from '../../util/constansts'
import ContactCard from './ContactCard'
import NavBtnFill from './NavBtnFill'
import PrimaryBtn from './PrimaryBtn'

const Contact = () => {
  return (
    <div className='mt-30 flex justify-around'>
        <div className='w-2/5'>
            <div className='text-[64px] font-medium text-start'>
                <p>LETS START</p> 
                <p>SOMETHING</p>
                <p className='text-primary'>NEW</p>
                <p>TOGETHER</p>
            </div>
            <div className='flex justify-around text-start mt-16'>
                <ContactCard user={contactList[0]} />
                <ContactCard user={contactList[1]} />
            </div>
        </div>
        <div className='w-2/5 flex flex-col justify-center items-center'>
            <p className='font-semibold text-[24px]'>Give us few details and we’ll get in touch</p>
            <form className='w-11/12 pt-7'>
                <div>
                    <input className='w-full border-b-2 border-slate-400 mb-8' type='text' placeholder='Name*' name='name' required={true}/>
                    <input className='w-full border-b-2 border-slate-400 mb-8' type='text' placeholder='Company Name' name='company' />
                    <input className='w-full border-b-2 border-slate-400 mb-8' type='email' placeholder='Email*' name='email' required={true}/>
                    <input className='w-full border-b-2 border-slate-400 mb-8' type='mobile' placeholder='Phone no*' name='phone' required={true}/>
                    <input className='w-full border-b-2 border-slate-400 mb-8' type='text' placeholder='Message*' name='message' required={true}/>
                    <PrimaryBtn widthFull={true}>
                        CONTACT US
                    </PrimaryBtn>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact