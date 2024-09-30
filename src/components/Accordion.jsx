import React, { useState } from 'react';

const AccordionData = [
    {
        title:'Innovative',
        description:'Ea Lorem magna sint pariatur ullamco adipisicing ex consectetur cillum irure qui officia nostrud.',
        image:'bf16923bd8c63f18453d77a25d8dd936.webp'
    },
    {
        title:'Reliable',
        description:'Creation, ensuring your messages resonate worldwide.From concept to distribution, our platform serves as your strategic partner.',
        image:'stock-photo-business-people-clapping-hands-during-a-conference-business-professionals-applauding-at-a-seminar-1935764035 1.webp'
    },
    {
        title:'Quality',
        description:'Irure culpa excepteur amet veniam qui aute et sunt proident occaecat sunt sit fugiat ex.',
        image:'AdobeStock_609605535.webp'
    }
]

const Accordion = () => {
    const [currentItem, setCurrentItem] = useState(1);
    
  return (
    <div className='flex gap-10 flex-col md:flex-row'>
        {/* <div className='w-[484px] h-[451px]'> */}
            <img
            className='object-cover w-4/5 h-[200px] md:w-[484px] md:h-[451px]'
            // width={'484px'}
            // height={'451px'}
            src={AccordionData[currentItem]?.image} />
        {/* </div> */}
        <div className='h-[200px] md:h-[451px] flex flex-col items-start'>
            {AccordionData?.map((item,idx)=>{
                return (
                <div 
                className={'flex flex-col items-start cursor-pointer flex-1 '+(currentItem==idx&&'flex-3')} key={idx}
                onClick={()=>setCurrentItem(idx)}
                >
                    {currentItem==idx && <p className='text-primary font-medium text-[14px] md:text-[20px]'>{"0"+(idx+1)}</p>}
                    <p className={'font-medium  '+(currentItem==idx ? 'text-black text-[18px] md:text-[32px]':'text-[16px] md:text-[24px] text-slate-400')}>{item?.title}</p>
                    {currentItem==idx &&
                    <p className='text-start text-[16px]'>{item?.description}</p>
                    }
                </div>);
            })
            }
        </div>
    </div>
  )
}

export default Accordion