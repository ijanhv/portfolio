import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl';

const LeftSide = () => {
  return (
    <div
    className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'
    >
        <div className='flex flex-col gap-4'>
            <a href="hhtps://github/ijanhv" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex  items-center justify-center hover:textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><TbBrandGithub /></span>
            </a>
            <a href="hhtps://github/ijanhv" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex  items-center justify-center hover:textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin /></span>
            </a>
            <a href="hhtps://github/ijanhv" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex  items-center justify-center hover:textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram /></span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textLight'>
        </div>  
    </div>
  )
}

export default LeftSide