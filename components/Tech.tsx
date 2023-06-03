import React from 'react';
import Image from 'next/image';

import angular from '../assets/angular.png';
import react from '../assets/react.png';
import ex from '../assets/ex.png';
import firebase from '../assets/firebase.png';
import flutter from '../assets/flutter.png';
import nodejs from '../assets/nodejs.png';
import typescript from '../assets/typescript.png';
import javas from '../assets/javas.png';
import python from '../assets/python.png';
import tailwind from '../assets/tailwind.png';
import materialui from '../assets/materialui.png';
import nextjs from '../assets/nextjs.png';
import redux from '../assets/redux.png';
import mongo from '../assets/mongo.png';


const Tech = () => {
  
    const skills = [
        {
            name: 'Angular',
            image: angular,
            style: 'shadow-red-500'
        },
        {
            name: 'React',
            image: react,
            style: 'shadow-blue-500'
        },
        {
            name: 'Ex',
            image: ex,
            style: 'shadow-green-500'
        },
        {
            name: 'Firebase',
            image: firebase,
            style: 'shadow-yellow-500'
        },
        {
            name: 'Flutter',
            image: flutter,
            style: 'shadow-blue-500'
        },
        {
            name: 'Nodejs',
            image: nodejs,
            style: 'shadow-green-500'
        },
        {
            name: 'Typescript',
            image: typescript,
            style: 'shadow-blue-500'
        },
        {
            name: 'JavaScript',
            image: javas,
            style: 'shadow-yellow-500'
        },
        {
            name: 'Python',
            image: python,
            style: 'shadow-blue-500'
        },
        {
            name: 'Tailwind',
            image: tailwind,
            style: 'shadow-green-500'
        },
        {
            name: 'Material UI',
            image: materialui,
            style: 'shadow-blue-500'
        },
        {
            name: 'Nextjs',
            image: nextjs,
            style: 'shadow-yellow-500'
        },
        {
            name: 'Redux',
            image: redux,
            style: 'shadow-blue-500'
        },
        {
            name: 'MongoDB',
            image: mongo,
            style: 'shadow-green-500'
        },


    ]

  return (
    <div
    className="bg-white "
  >
    <div className="max-w-screen-lg text-center mx-auto p-3 flex flex-col justify-center w-full h-full text-white">
      <div>
        
        <p className="py-6 text-gray-700 font-semibold text-3xl">Technologies I use</p>
      </div>

      <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 sm:px-0">
        {skills.map(({ image, style }, i) => (
          <div
            key={i}
            className={` hover:scale-105 duration-500 rounded-full `}
          >
            <Image src={image} alt="" className="sm:w-20 w-16 mx-auto" width={20} height={20} />
            {/* <p className="mt-4">{title}</p> */}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Tech