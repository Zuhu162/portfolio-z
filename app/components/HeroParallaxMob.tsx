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

export const HeroParallaxMob = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: any;
    bgColor: string;
  }[];
}) => {
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const thirdRow = products.slice(4, 6);
  const fourthRow = products.slice(6, 8);
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
      className="h-[1850px]  overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-base-200" : "bg-neutral"}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-5 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-neutral" : "bg-base-100"}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              bgColor={index % 2 === 0 ? "bg-neutral" : "bg-base-100"}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5">
          {fourthRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
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
        From designing and implementing systems, to making them ready for
        production. I love working with JavaScript and TypeScript and
        specializing in the MERN Stack and NextJS, while also having the mindset
        of adapting and working with any system.
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
    thumbnail: any;
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
      className="group/product h-[10rem] w-[10rem] relative flex-shrink-0"
    >
      <a
        target="_blank"
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <div className={`rounded-lg ${bgColor}`}>
          <Image
            src={product.thumbnail}
            className="object-cover absolute h-full w-full inset-0 rounded-lg"
            alt={product.title}
          />
        </div>
      </a>
      <div className="absolute rounded-lg inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
