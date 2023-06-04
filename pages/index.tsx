import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion"
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Experience2 from "@/components/Experience2";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] mx-auto w-full p-4"><Banner />
        {/* <Skills /> */}
        <AboutMe />
        <Experience2 />
        <Projects />
        <Contact />
        </div>
       
        {/* About */}
        {/* Experience */}
        {/* Projects */}
        {/* Contact */}
        {/* Footer */}
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
