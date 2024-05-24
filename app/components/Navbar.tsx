import React, { useEffect, useState } from "react";
import Image from "next/image";
import Home from "./icons/Home";
import Github from "./icons/Github";
import Projects from "./icons/Profile";
import Profile from "./icons/Projects";
import LinkedIn from "./icons/LinkedIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./icons/Logo";

const NavIcons = [
  {
    name: "Hero",
    link: "#Home",
    component: Home,
  },
  {
    name: "About",
    link: "#About",
    component: Profile,
  },
  {
    name: "Projects",
    link: "#Projects",
    component: Projects,
  },
  {
    name: "GitHub",
    link: "https://github.com/Zuhu162",
    component: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zuhayer-siddique/",
    component: LinkedIn,
  },
];

interface Props {
  width?: string;
}

const Navbar = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      className={`backdrop-blur-sm container mx-auto navbar h-12 px-10 text-white border-radius rounded-lg flex justify-center ${
        props.width && isClient && window.innerWidth > 1024
          ? `w-${props.width}`
          : "w-full"
      } md:justify-between`}
      style={{ transition: "width 0.3s ease" }}
    >
      <div className="hidden md:block w-[45px] h-[45px]">
        <Logo />
      </div>
      <div className="flex justify-center gap-12 w-1/2">
        {NavIcons.map((Component, index) => (
          <Link
            key={index}
            href={Component.link}
            target={Component.link.includes("#") ? "_self" : "_blank"}
          >
            <Component.component
              className="w-6 fill-neutral hover:fill-accent cursor-pointer transition duration-300 ease-in-out"
              key={index}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
