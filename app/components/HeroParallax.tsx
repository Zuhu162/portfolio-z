"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectHover from "./ProjectHover";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail?: any;
    bgColor: string;
    desc: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[2550px] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] mb-20"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-base-200" : "bg-neutral"}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-neutral" : "bg-base-100"}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-neutral" : "bg-base-100"}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-5xl font-bold dark:text-white text-gradient">
        Projects
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        From <span className="text-accent">designing</span> and{" "}
        <span className="text-accent">implementing</span> systems, to making
        them ready for production. I love working with{" "}
        <span className="text-secondary">JavaScript</span> and{" "}
        <span className="text-blue-400">TypeScript</span> and specializing in
        the <span className="text-primary">MERN Stack</span> and{" "}
        <span className="text-primary">NextJS</span>, while also having the
        mindset of adapting and working with any system.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  bgColor,
}: {
  product: {
    title: string;
    link: string;
    thumbnail?: any;
    desc: string;
  };
  translate: MotionValue<number>;
  bgColor: string; // Add bgColor property to the type definition
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[400px] w-[400px] relative flex-shrink-0"
    >
      <a
        target="_blank"
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <div className={`w-full rounded-lg ${bgColor}`}>
          <Image
            src={product.thumbnail}
            className="object-fit absolute h-full w-full inset-0 rounded-lg"
            alt={product.title}
          />
        </div>
      </a>
      <ProjectHover product={product} />
    </motion.div>
  );
};
