import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.4,
          type: "spring",
          duration: 1.2,
          bounce: 0,
        },
        opacity: { delay: i * 0.4, duration: 0.01 },
      },
    }),
  };

  const fillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        opacity: { delay: i * 0.4, duration: 0.3 },
        y: { delay: i * 0.4, type: "spring", stiffness: 120, damping: 10 },
      },
    }),
  };

  return (
    <svg
      width="92"
      height="68"
      viewBox="0 0 46 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* Bottom left fill (Z) */}
      <motion.path
        d="M21.25 25.1964L21.25 34L6.375 25.1964L6.375 17.4554L21.25 25.1964Z"
        fill="#7EA0F6"
        fillOpacity="0.77"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{ zIndex: 1 }}
      />
      {/* Bottom right fill (S) */}
      <motion.path
        d="M24.0885 25.1964L24.0885 34L38.9635 25.1964L38.9635 17.4554L24.0885 25.1964Z"
        fill="#7EA0F6"
        fillOpacity="0.77"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{ zIndex: 1 }}
      />
      {/* Left angle bracket (Z shape) */}
      <motion.path
        d="M14.1415 12.5223L21.7656 16.9241L6.70401 25.4044L4.28878e-05 21.5339L14.1415 12.5223Z"
        stroke="#D9E2FC"
        fill="#D9E2FC"
        strokeWidth="2"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{ zIndex: 2 }}
      />
      {/* Right angle bracket (S shape) */}
      <motion.path
        d="M31.1971 12.5223L23.5729 16.9241L38.6346 25.4044L45.3385 21.5339L31.1971 12.5223Z"
        stroke="#D9E2FC"
        fill="#D9E2FC"
        strokeWidth="2"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{ zIndex: 2 }}
      />
      {/* Top left fill (Z) */}
      <motion.path
        d="M7.09735 8.79834L7.40094 0L21.9635 9.3113L21.6966 17.0478L7.09735 8.79834Z"
        fill="#8EA7E8"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{ zIndex: 3 }}
      />
      {/* Top right fill (S) */}
      <motion.path
        d="M38.2412 8.79834L37.9376 0L23.3751 9.3113L23.642 17.0478L38.2412 8.79834Z"
        fill="#8EA7E8"
        variants={fillVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{ zIndex: 3 }}
      />
    </svg>
  );
};

export default AnimatedLogo;
