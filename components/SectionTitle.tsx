import React from 'react'

interface Props {
    title: string,
    titlleNo: string
}

const SectionTitle = ({ title, titlleNo } : Props) => {
  return (
    <h2 className='font-titleFont text-4xl font-semibold flex items-center'>
        <span className='text-base md:text-3xl text-textGreen mr-2'>{titlleNo}</span>
        {title}
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'></span>
    </h2>

  )
}

export default SectionTitle