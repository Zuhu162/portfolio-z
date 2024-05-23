"use client";
import React from "react";
import { HeroParallax } from "./HeroParallax";
import Dunder from "../../public/Projects/dunder.png";
import Epic from "../../public/Projects/epic.png";
import Financier from "../../public/Projects/financier.png";
import Fresheries from "../../public/Projects/fresheries.png";
import Screenshot from "../../public/Projects/screenshot.png";
import Afubot from "../../public/Projects/afubot.png";
import Pentest from "../../public/Projects/pentest.png";
import UTMTT from "../../public/Projects/utmtt.png";
import { HeroParallaxTab } from "./HeroParallaxTab";
import { HeroParallaxMob } from "./HeroParallaxMob";

export function Projects() {
  return (
    <div id="Projects">
      <div className="hidden xl:block">
        <HeroParallax products={products} />
      </div>
      <div className="hidden md:block xl:hidden">
        <HeroParallaxTab products={products} />
      </div>
      <div className="block md:hidden">
        <HeroParallaxMob products={products} />
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Dunder Mifflin Office Management System",
    link: "https://github.com/Zuhu162/dund-sys-client",
    thumbnail: Dunder,
    desc: "An office management tool inspired by the beloved sitcom, packed with features and visualizers to manage daily office tasks efficiently.",
  },
  {
    title: "Epic Games Client Clone",
    link: "https://github.com/Zuhu162/epicgames-clone",
    thumbnail: Epic,
    desc: "A faithful clone of the Epic Games desktop client using ReactJS and MUI, showcasing a modern and minimalist design to test and improve frontend skills.",
  },
  {
    title: "Financier - Finance Management System",
    link: "https://github.com/Zuhu162/financier-complete",
    thumbnail: Financier,
    desc: "A comprehensive finance management app built with ReactJS, ExpressJS, and MongoDB to log and visualize financial transactions effectively.",
  },
  {
    title: "Fresheries - Redux",
    link: "https://github.com/Zuhu162/redux-fresheries-client",
    thumbnail: Fresheries,
    desc: "A project that marks my first foray into Redux, providing a powerful introduction to state management in larger-scale applications.",
  },
  {
    title: "Screenshot Scraper",
    link: "https://github.com/Zuhu162/screenshot_scraper",
    thumbnail: Screenshot,
    desc: "Utilizing Puppeteer and Nodemailer, this program schedules and captures website screenshots at regular intervals, delivering them directly to your inbox.",
  },
  {
    title: "AFUbot",
    link: "https://www.afubot.com/",
    thumbnail: Afubot,
    desc: "Landing page for a university-funded inter-campus food delivery robot, featuring 3D assets created with ThreeJS.",
  },
  {
    title: "Pentest Tool - Ronas Network & Services",
    link: "https://pentest.ronasnetwork.com/",
    thumbnail: Pentest,
    desc: "A web-based multi-security testing platform developed during my internship at Ronas Network & Services in Cyberjaya, Malaysia.",
  },
  {
    title: "UTM Timetable",
    link: "https://github.com/Zuhu162/AD-Timetable",
    thumbnail: UTMTT,
    desc: "A timetable and management system for the University of Technology Malaysia, created during our Applications Development course using the university's API.",
  },
];
