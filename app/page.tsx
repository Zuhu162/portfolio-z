"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import { Projects } from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);
  const [navWidth, setNavWidth] = useState("full");
  // const [displayLogo, setDisplayLogo] = useState("block");

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const springConfig = { stiffness: 300, damping: 30 };
  const animatedNavbarPos = useSpring(20, springConfig); // Initial value of 20
  const animatedNavWidth = useSpring(1, springConfig);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercentage = latest * 100;
    if (scrollPercentage > 5) {
      animatedNavbarPos.set(viewportHeight - 100); // Adjust the 100 value if you want some offset from the bottom
      setTimeout(() => {
        animatedNavWidth.set(0.5); // 0.5 for half width
        setNavWidth("1/2");
      }, 500);
    } else {
      animatedNavbarPos.set(20);
      setTimeout(() => {
        animatedNavWidth.set(0.5); // 0.5 for half width
        setNavWidth("full");
      }, 500);
    }
  });

  return (
    <main>
      <motion.div
        style={{ top: animatedNavbarPos, position: "sticky", zIndex: 10 }}
      >
        <Navbar width={navWidth} />
      </motion.div>
      <div
        id="Home"
        className="w-full"
        style={{
          backgroundImage: "url('/city.svg')",
          backgroundSize: "fit",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto w-full d:w-9/12 px-2 mb-20">
          <Hero />
        </div>
      </div>
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </main>
  );
}
