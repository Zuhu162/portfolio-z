import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import FaceLeft from "./svgs/FaceLeft";
import FaceRight from "./svgs/FaceRight";
import Download from "./icons/Download";
import skills1 from "../../public/Skills/Group1.svg";
import skills2 from "../../public/Skills/Group2.svg";
import hobbies1 from "../../public/Skills/hobbies1.svg";
import hobbies2 from "../../public/Skills/hobbies2.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const bounceTransition = {
    y: {
      duration: 2,
      repeat: Infinity, // This will make the animation loop infinitely
      repeatType: "reverse", // This will reverse the animation to create a bouncing effect
      ease: "easeInOut",
    },
  };

  return (
    <div id="About">
      <div className="flex lg:w-full h-screen items-center justify-between relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full hidden lg:flex justify-start mr-50">
          <FaceLeft />
          <div className="relative top-0 left-0">
            <motion.div
              transition={bounceTransition}
              animate={{ y: ["0%", "-5%"] }}>
              <Image src={skills1} alt="Skills-1" />
            </motion.div>
            <motion.div
              className="absolute top-0 right-0"
              transition={bounceTransition}
              animate={{ y: ["0%", "5%"] }}>
              <Image src={skills2} alt="Skills-2" />
            </motion.div>
          </div>
        </motion.div>

        <div ref={ref} className="w-full flex flex-col items-center">
          <p className="text-5xl font-bold text-accent text-left">About Me</p>
          <motion.hr
            initial={{
              opacity: 0,
              width: 0,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              width: isInView ? "50%" : 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="border-t-2 w-3/5 skew-y-2 border-neutral my-4 mb-10"
          />
          <motion.p
            className=" text-2xl px-5 text-center text-neutral"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}>
            Software Engineering student at the University of Technology
            Malaysia with a passion towards FullStack Development. Ready to turn
            your ideas into reality? Let&apos;s connect and create some digital
            magic! 🚀
          </motion.p>
          <Link
            href="https://drive.google.com/file/d/1XuXLi2UNpQKvp-dvLy926xHt9XLo0MzB/view?usp=sharing"
            target="blank"
            className="flex justify-center w-full">
            <button className="flex justify-center items-center text-sm gap-2 bg-transparent hover:bg-neutral border border-neutral w-full xl:w-2/5 text-neutral hover:text-black duration-300 font-bold py-3 px-4 rounded-xl mt-12">
              Download Resume
              <Download />
            </button>
          </Link>
        </div>

        <motion.div
          className="w-full hidden lg:flex justify-end"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}>
          <div className="relative top-0 right-0">
            <motion.div
              transition={bounceTransition}
              animate={{ y: ["0%", "-3%"] }}>
              <Image src={hobbies1} alt="Skills-1" />
            </motion.div>
            <motion.div
              className="absolute top-1 right-10"
              transition={bounceTransition}
              animate={{ y: ["0%", "5%"] }}>
              <Image layout="responsive" src={hobbies2} alt="Skills-2" />
            </motion.div>
          </div>
          <FaceRight />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
