import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="flex items-center text-3xl font-bold text-primaryColor">
            <span className="hexagon-border">J</span>
          </h1>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/Janhavi_Patil_Resume__Final (1).pdf" target="_blank">
          <motion.button
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="px-4 py-2 items-center rounded-full text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor transform hover:scale-110 transition-all duration-300"
          >
            <span className="flex items-center gap-1 ">Resume <BsArrowUpRight /> </span>
          </motion.button>
          </a>
        </div>
        {/* Small Icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">
            </span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300">
            </span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300">
            </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
