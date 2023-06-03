"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Hey! I'm Janhavi Patil, I'm a{" "}
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "Graphic Designer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Currently pursuing my Bachelors in Information Technology from
            University of Mumbai
          </p>
          <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Have a look at my resume <BsArrowUpRight className="inline-block" />
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="hero.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
