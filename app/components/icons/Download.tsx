import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Download = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            pathLength: isInView ? 1 : 0,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default Download;
