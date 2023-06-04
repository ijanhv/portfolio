import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import WebSkyne from "./WebSkyne";
import VESCOP from "./VESCOP";
import { motion } from "framer-motion";

const Experience2 = () => {
    const [ exp, setExp ] = useState("WebSkyne");

    const handleClick = (place: string) => {
        setExp(place);
    }   

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titlleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <motion.ul 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: 0.4, duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, y: 50 },
           visible: { opacity: 1, y: 0 },
         }}
        className="md:w-32 flex flex-col">
          <li onClick={() => handleClick("WebSkyne")} className={`border-l-2 ${exp === 'WebSkyne' ?  'border-l-textGreen' : 'border-l-hoverColor'} text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer dusration-300 px-8`}>
            WebSkyne
          </li>
          <li onClick={() => handleClick("VESCOP")} className={`border-l-2 ${exp === 'VESCOP' ?  'border-l-textGreen' : 'border-l-hoverColor'} text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer dusration-300 px-8`}>
            VESCOP
          </li>
          <li onClick={() => handleClick("VESITConnect")} className={`border-l-2 ${exp === 'VESITConnect' ?  'border-l-textGreen' : 'border-l-hoverColor'} text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer dusration-300 px-8`}>
            VESITConnect
          </li>
        </motion.ul>

        {exp === "WebSkyne" ? <WebSkyne /> : exp === "VESCOP" ? <VESCOP /> : <h1>hello</h1> }
      </div>
    </section>
  );
};

export default Experience2;
