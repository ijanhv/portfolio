import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const WebSkyne = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Full Stack Web Developer <span className='text-textGreen tracking-wide'>@WebSkyne</span></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>Novermber 2022 - Februray 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <motion.li 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
             }}
            className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward /></span>{" "}
            Worked for various client-side projects and developed responsive and user-friendly web applications using Next.js and
Nest.js and collaborated with project managers and team members to ensure timely completion of projects.
            </motion.li>
            <motion.li 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.6, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
             }}
            className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward /></span>{" "}
            Created custom features such as dynamic forms, real-time chat functionality, and integration with Backend APIs.
            </motion.li>
        </ul>
    </motion.div>
  )
}

export default WebSkyne