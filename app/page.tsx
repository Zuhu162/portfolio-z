"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import { Projects } from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import "./globals.css";
import city from "../public/city.svg";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { ArticleCard } from "./components/ui/ArticleCard";
import Articles from "./components/Articles";
import Logo from "./components/icons/Logo";
import AnimatedLogo from "./components/Logo-animation";
import Navbar from "./components/Navbar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);
  const [navWidth, setNavWidth] = useState("full");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const springConfig = { stiffness: 300, damping: 30 };
  const animatedNavbarPos = useSpring(20, springConfig);
  const animatedNavWidth = useSpring(1, springConfig);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercentage = latest * 100;
    if (scrollPercentage > 5) {
      animatedNavbarPos.set(viewportHeight - 100);
      setTimeout(() => {
        animatedNavWidth.set(0.5);
        setNavWidth("1/2");
      }, 500);
    } else {
      animatedNavbarPos.set(20);
      setTimeout(() => {
        animatedNavWidth.set(0.5);
        setNavWidth("full");
      }, 500);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <AnimatedLogo />
        </div>
      </div>
    );
  }

  return (
    <main>
      <motion.div
        style={{ top: animatedNavbarPos, position: "sticky", zIndex: 10 }}>
        <Navbar width={navWidth} />
      </motion.div>
      <BackgroundBeamsWithCollision>
        <div id="Home" className="w-full heroBG">
          <div className="container mx-auto w-full d:w-9/12 px-2 mb-20">
            <Hero />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <About />
      <Projects />
      <Articles />
      <Experiences />
      <Footer />
    </main>
  );
}
