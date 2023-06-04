import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";



const Skill = ({ name, x, y }: any) => {
  return (
    <motion.div
      className="flex justify-center rounded-full border border-white font-semibold text-textLight py-3 px-6 shadow-shadowDark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x:x, y: y }}
      transition={{ duration: 1.5}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-contentContainer">
    <SectionTitle title="Technologies I use" titlleNo="01"/>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full font-semibold bg-circularDark ">
        <motion.div
          className="flex justify-center border border-white rounded-full font-semibold text-textLight p-8 shadow-shadowDark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="MongoDB" x="-5vw" y="-10vw" />
        <Skill name="NextJs" x="-20vw" y="2vw" />
        <Skill name="NextJs" x="20vw" y="6vw" />
        <Skill name="NextJs" x="0vw" y="12vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="NextJs" x="15vw" y="-12vw" />
        <Skill name="NextJs" x="32vw" y="-5vw" />
        <Skill name="NextJs" x="0vw" y="-20vw" />
        <Skill name="NextJs" x="-25vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
