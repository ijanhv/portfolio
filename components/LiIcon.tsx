import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference } : any) => {

    const { scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center"],
        }
    )
   return (
    <figure className="absolute left-0 stroke-textDark">
        <svg width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-textGreen stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className=' stroke-[5px] fill-white'
            style={{ pathLength: scrollYProgress }}
            />
            <circle cx="75" cy="50" r="20" className=' stroke-1 fill-textGreen' />
        </svg>
    </figure>
   )
}

export default LiIcon