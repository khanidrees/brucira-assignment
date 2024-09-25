import React from 'react'

const NavBtn = ({ title, active }) => {
  return (
    <button className='flex justify-center items-center gap-[10px] mr-[40px]' >
        <div className={'font-semibold text-sm '+(active==title?'text-black':'text-slate-400')}>{title}</div>
        <img  className='' src={active==title? 'active-img.svg': 'inactive-img.svg'}/>
    </button>
    
  )
}

export default NavBtn