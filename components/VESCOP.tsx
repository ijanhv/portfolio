import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'


const VESCOP = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Freelance Graphic Designer <span className='text-textGreen tracking-wide'>@VESCOP</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>January 2023 - Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward /></span>{" "}
            Designed and laid out a 120-page college annual magazine featuring articles, interviews, and photographs on InDesign
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward /></span>{" "}
            Worked closely with editorial team of the college to ensure design aligned with the magazine’s content and vision.
            </li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward /></span>{" "}
            Currently working on the design of a 50-page brochure for the training and placement cell of the college.            </li>
        </ul>
    </motion.div>
  )
}

export default VESCOP