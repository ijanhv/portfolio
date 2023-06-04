import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeIn, textVariant } from "@/motion";
import skillbrisk from "../public/assets/skillbrisk.png";
import dineout from "../public/assets/dineout.png";
import github from "../public/assets/GitHub-Mark.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import jkrypt from "../public/assets/jkrypt.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: any) => {
  return (
    <motion.div
      variants={projectVariant}
      className="cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="border border-b-4 hover:border-[#78ffdf] border-textGreen p-5 rounded-2xl sm:w-[350px] w-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            height={230}
            width={360}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] flex gap-2">
            {name}
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-5 items-center rounded-full text-textGreen  text-[13px] hover:bg-hoverColor transform hover:scale-110 transition-all duration-300"
            >
              Link
            </motion.button>
          </h3>
          <p className="mt-2 text-secondary font-bodyFont text-[13px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  border border-indigo-400 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "SkillBrisk",
      description:
        "A platform for freelancers and clients to connect with each other, allowing sellers to post their gigs and Implemented features that make it easy for freelancers to create a profile, showcase their skills and experience",

      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: skillbrisk,
      source_code_link: "https://github.com/ijanhv/skillbrisk",
    },
    {
      name: "DineOut",
      description:
      "DineOut is a delightful mobile application designed to enhance your dining experience. With its user-friendly interface and powerful features, DineOut makes it easy for you to discover, explore, and enjoy a wide range of dining options",
      tags: [
        {
          name: "fluuter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "dart",
          color: "pink-text-gradient",
        },
      ],
      image: dineout,
      source_code_link: "https://github.com/ijanhv/Dineout_App",
    },
    {
      name: "MediPlus",
      description:
      "Utilized machine learning algorithms to predict diseases such as diabetes, heart disease, and breast cancer",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: skillbrisk,
      source_code_link: "https://github.com/ijanhv/MediPlus",
    },
    {
      name: "JKrypt",
      description:
      "Utilized machine learning algorithms to predict diseases such as diabetes, heart disease, and breast cancer",
      tags: [
        {
          name: "blokchain",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
        {
          name: "smart contracts",
          color: "green-text-gradient",
        },
      ],
      image: jkrypt,
      source_code_link: "https://github.com/ijanhv/Cryptocurrency_App",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="max-w-contentContainer mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      >
        <motion.div variants={textVariant()}>
          <SectionTitle title="My Projects" titlleNo="03" />
        </motion.div>

        <div className="w-full flex">
          <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex flex-wrap gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
