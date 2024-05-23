import getExperienceData from "@/utils/ExperienceData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Experiences = () => {
  const experiences = getExperienceData();

  return (
    <div className="mx-auto w-full flex flex-col container p-10">
      <p className="text-5xl font-bold text-gradient mb-[1em] text-center xl:text-left">
        Experience
      </p>
      {experiences.map((e, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref);

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 20 : -20,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : index % 2 === 0 ? 20 : -20,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="h-2/3 w-2/3 mx-auto flex flex-col-reverse lg:flex-col lg:justify-center mb-[10em]"
          >
            <div className="w-full lg:flex">
              <div className="w-full mx-auto flex flex-col justify-center">
                <p className="text-xl text-primary text-bold font-bold mb-5">
                  {e.position}
                </p>
                <p className="text-2xl text-neutral font-bold mb-2">{e.name}</p>
                <p className="text-lg text-neutral mb-2">{e.location}</p>
                <p className="text-lg text-base-100 mb-2">{e.date}</p>
              </div>
              <a
                target="_blank"
                href={e.link}
                className="transition ease-in-out hover:-translate-y-5"
              >
                <Image src={e.img} width={350} height={350} alt={e.name} />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experiences;
