import { StaticImageData } from "next/image";
import getExperienceData from "@/utils/ExperienceData";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface Experience {
  position: string;
  name: string;
  location: string;
  date: string;
  link: string;
  img: StaticImageData;
}

const Experiences: React.FC = () => {
  const experiences = getExperienceData();

  return (
    <div className="mx-auto w-full flex flex-col container p-10">
      <p className="text-5xl font-bold text-gradient mb-[1em] text-center xl:text-left">
        Experience
      </p>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
    </div>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <motion.div
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
            {experience.position}
          </p>
          <p className="text-2xl text-neutral font-bold mb-2">
            {experience.name}
          </p>
          <p className="text-lg text-neutral mb-2">{experience.location}</p>
          <p className="text-lg text-base-100 mb-2">{experience.date}</p>
        </div>
        <a
          target="_blank"
          href={experience.link}
          className="transition ease-in-out hover:-translate-y-5"
        >
          {/* Assuming next/image is used */}
          <Image
            src={experience.img}
            width={350}
            height={350}
            alt={experience.name}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Experiences;
