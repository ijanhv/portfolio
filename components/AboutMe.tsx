import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import image from "../public/assets/image.webp";
import { motion } from "framer-motion";

const AboutMe = () => {
  const techs = [
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "TailwindCSS",
    "Flutter",
    "NextJS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "Firebase",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titlleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full lgl:w-2/3 text-base text-textDark font-bodyFont font-medium flex flex-col gap-4"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. libero
            earum sunt maiores voluptates. Praesentium eligendi ab laborum
            nostrum odit repellat dolorem consectetur reprehenderit. Laboriosam,
            ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis voluptate commodi id esse vel. Voluptatem fugit, commodi
            iste reprehenderit unde officiis deserunt dicta. Animi nisi in iure
            natus! Quae, est?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nulla quis, atque perspiciatis Perferendis nulla quis, atque
            perspiciatis
          </p>
          <p>Here are few Technologies I&apos;ve been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-bodyFont grid grid-cols-2 gap-2 mt-6">
            {techs.map((tech, i) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.07 * i, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={i}
                className="flex items-center gap-2"
              >
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full h-full relative z-20 flex pl-6 lgl:pl-0"
            >
              <Image
                className="rounded-lg h-full object-cover"
                src={image}
                alt="ME"
              />
              {/* <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen rounded-md top-0 left-0 group-hover:bg-transparent duration-300">

              </div> */}
              <div className="hidden lgl:inline-flex w-full h-100 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
