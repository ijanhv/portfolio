import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const ExperienceItem = ({
  position,
  company,
  duration,
  description,
  address,
}: any) => {
  const ref = useRef(null);

  return (
    <motion.li
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalise font-bold text-2xl">
          {position}&nbsp; <p>{company}</p>
        </h3>
        <span className="capitalise font-medium text-textGreen">
          {duration} | {address}
        </span>
        <p className="font-medium w-full my-2 opacity-75">{description}</p>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const [experience, setExperience] = useState([
    {
      position: "Full Stack Web Developer",
      company: "Webskyne",
      duration: "3 months",
      description:
        "Build UIs Worked for various client-side projects and developed responsive and user-friendly web applications using Next.js and Nest.js and collaborated with project managers and team members to ensure timely completion of projects.",
      address: "Delhi",
    },
    {
      position: "Full Stack Web Developer",
      company: "Webskyne",
      duration: "3 months",
      description:
        "Build UIs Worked for various client-side projects and developed responsive and user-friendly web applications using Next.js and Nest.js and collaborated with project managers and team members to ensure timely completion of projects.",
      address: "Delhi",
    },
    {
      position: "Full Stack Web Developer",
      company: "Webskyne",
      duration: "3 months",
      description:
        "Build UIs Worked for various client-side projects and developed responsive and user-friendly web applications using Next.js and Nest.js and collaborated with project managers and team members to ensure timely completion of projects.",
      address: "Delhi",
    },
  ]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
    
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Experience" titlleNo="02" />
      <div className="my-64">
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }} 
            className="absolute left-8 top-0 w-[4px] h-full mr-0 origin-top bg-textDark"
          />
          <motion.ul 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-full flex flex-col items-start justify-between lgl:ml-4">
            {experience.map((experienceItem, i) => (
              <motion.div 
              key={i}
              // initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   transition={{ duration: 0.5, delay: 0.2 }}
              >
              <ExperienceItem

                position={experienceItem.position}
                company={experienceItem.company}
                duration={experienceItem.duration}
                description={experienceItem.description}
                address={experienceItem.address}
              />
              </motion.div>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
