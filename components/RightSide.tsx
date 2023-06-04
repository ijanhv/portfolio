import React from 'react';
import Link from 'next/link';

const RightSide = () => {
  return (
    <div
    className='w-full h-full flex flex-col items-center justify-end gap-14 text-textLight'
    >
        <Link href="">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>patil.janhavi1207@gmail.com</p>
        </Link> 
        <div className='w-[2px] h-32 bg-textLight'>
        </div>  
    </div>
  )
}

export default RightSide