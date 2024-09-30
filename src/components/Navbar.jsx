import React, { useState } from 'react';
import NavBtn from './NavBtn';
import NavBtnFill from './NavBtnFill';


const Navbar = () => {
    const [active, setActive] = useState('ABOUT');
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=' flex justify-between items-center h-[86px] fixed top-0 left-0 w-[100vw] px-4 md:px-[90px]'>
        <div>
            <img src='./logo.svg' alt='logo'/>
        </div>
        
        <button 
        onClick={()=>setIsOpen((o)=>!o)}
        data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {isOpen?
          <svg fill="#333" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
          :
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          }
          
        </button>
        <div className={(isOpen? 'block':'hidden ') +"py-8 md:py-0 absolute top-20 md:static  w-full md:flex md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-0 bg-white md:bg-transparent pb-4 md:pb-0"} id="navbar-default">
            <NavBtn title={'SERVICES'} active={active}/>
            <NavBtn title={'WORK'} active={active}/>
            <NavBtn title={'ABOUT'} active={active}/>
            <NavBtnFill>Get Started</NavBtnFill>
        </div>
    </div>
  )
}

export default Navbar