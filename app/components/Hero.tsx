import React from "react";
import { TypewriterEffectSmooth } from "./HeroLeft";
import HeroRight from "./HeroRight";
import Down from "./icons/Down";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const words = [{ text: "Zuhayer Siddique" }];

  return (
    <div className="mt-10 container block text-center justify-center mx-auto w-full min-h-screen h-auto px-2 xl:flex xl:text-left xl:w-9/12 xl:mt-0">
      <div className="w-full flex flex-col align-middle justify-center">
        <p className="text-2xl text-neutral">Hi there, I'm</p>
        <TypewriterEffectSmooth
          words={words}
          className="my-typewriter"
          cursorClassName="my-cursor"
        />
        <p className="text-lg text-primary">Software Engineer</p>
        <p className="text-lg text-white">MERN Stack Developer</p>
        <div className="w-full">
          <Link href="#Projects">
            <button className="bg-primary hover:bg-accent duration-300 w-full md:w-1/3 text-white font-bold py-3 px-4 rounded-xl mt-10">
              View Projects
            </button>
          </Link>
        </div>
        <div className="hidden mt-48 xl:fle">
          <motion.div
            animate={{ y: [0, 100, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "loop",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <Down className="w-6 fill-neutral mr-3" />
          </motion.div>
          <p className="text-md text-neutral">Scroll to see more sections</p>
        </div>
      </div>
      <div className="flex w-full h-screen mt-10">
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
