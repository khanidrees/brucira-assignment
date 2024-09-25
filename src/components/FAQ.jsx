import React, { useState } from 'react'
const FAQData = [
    {
        question:'How do I sign up?',
        answer:'Occaecat aliquip excepteur nisi commodo nostrud nisi sint commodo veniam enim ea do fugiat exercitation.'
    },
    {
        question:'What information do I need to provide during the sign-up process?',
        answer:'Ut ex duis sunt irure nulla culpa incididunt anim fugiat duis laborum elit mollit officia.'
    },
    {
        question:'Is my information secure during the sign-up process?',
        answer:'Nulla commodo veniam commodo officia sit sit ea ex est culpa cupidatat cillum sit occaecat.'
    },
    {
        question:'Who can apply?',
        answer:'Laboris adipisicing mollit cupidatat pariatur culpa.'
    },
    {
        question:'What are the terms and conditions for the collaboration?',
        answer:'Dolor amet nulla officia voluptate nisi dolor minim.'
    },
    {
        question:'What is the minimum duration of the contract?',
        answer:'Eu dolore aliqua id nisi id nostrud ea consectetur amet ullamco sint dolore cupidatat cupidatat.'
    },
    

]

const FAQ = () => {
    const [currentItem, setCurrentItem] = useState();
  return (
    <div className='mt-32 flex justify-between flex-wrap'>
        <p className='font-medium text-[52px] w-2/5 text-start'>
        Frequently asked
        questions
        </p>
        <div className='w-3/5'>
            {FAQData?.map((item,idx)=>{
                return (
                <div 
                className={'flex flex-col items-start cursor-pointer'} key={idx}
                onClick={()=>setCurrentItem(idx)}
                >
                    <div className='flex justify-between w-full py-6'>
                        <p className={'font-normal  text-black text-[18px]'}>{item?.question}</p>
                        <img src={currentItem==idx?'up.svg':'down.svg'}/>
                    </div>
                    
                    {currentItem==idx &&
                    <p className='text-start'>{item?.answer}</p>
                    }
                </div>);
            })
            }
        </div>
    </div>
  )
}

export default FAQ;