import React, { useState } from 'react';
import NavBtn from './NavBtn';
import NavBtnFill from './NavBtnFill';


const Navbar = () => {
    const [active, setActive] = useState('ABOUT')
  return (
    <div className=' flex justify-between items-center h-[86px] fixed top-0 left-0 w-full'>
        <div>
            <img src='./logo.svg' alt='logo'/>
        </div>
        <div className='flex'>
            <NavBtn title={'SERVICES'} active={active}/>
            <NavBtn title={'WORK'} active={active}/>
            <NavBtn title={'ABOUT'} active={active}/>
            <NavBtnFill>Get Started</NavBtnFill>
        </div>
    </div>
  )
}

export default Navbar