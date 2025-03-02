import React from "react";
import { HeroParallax } from "./HeroParallax";
import { HeroParallaxTab } from "./HeroParallaxTab";
import { HeroParallaxMob } from "./HeroParallaxMob";

import Dunder from "../../public/Projects/dunder.png";
import Epic from "../../public/Projects/epic.png";
import Financier from "../../public/Projects/financier.png";
import Gradify from "../../public/Projects/Gradify.png";
import Screenshot from "../../public/Projects/screenshot.png";
import RapidKL from "../../public/Projects/rapidkl.png";
import Pentest from "../../public/Projects/pentest.png";
import UTMTT from "../../public/Projects/utmtt.png";

export const Projects = () => {
  const products = [
    {
      title: "UTM Timetable",
      link: "https://github.com/Zuhu162/UTMFC-Timetable",
      thumbnail: UTMTT,
      desc: "A timetable and management system for the University of Technology Malaysia, created during our Applications Development course using the university's API.",
      bgColor: "#ffffff",
    },
    {
      title: "RapidKL Pathfinder",
      link: "https://github.com/Zuhu162/AStar-MRT-PathFinder",
      thumbnail: RapidKL,
      desc: "This project is a pathfinding visualization tool for MRT systems, inspired by heuristic search algorithms such as A* and Dijkstra. The tool uses the MyRapid KL MRT system as its base and allows users to visualize stations, lines, and optimal paths between them.",
      bgColor: "#ffffff",
    },

    {
      title: "Gradify",
      link: "https://github.com/Zuhu162/Gradify",
      thumbnail: Gradify,
      desc: " is a web-based platform that simplifies assignment management and grading for teachers and students. Teachers can create assignments, track submissions, and grade efficiently, while students can submit their work via Google Drive or PDFs and view their grades seamlessly. 🚀",
      bgColor: "#ffffff",
    },
    {
      title: "Epic Games Client Clone",
      link: "https://github.com/Zuhu162/epicgames-clone",
      thumbnail: Epic,
      desc: "A faithful clone of the Epic Games desktop client using ReactJS and MUI, showcasing a modern and minimalist design to test and improve frontend skills.",
      bgColor: "#ffffff",
    },
    {
      title: "Dunder Mifflin Office Management System",
      link: "https://github.com/Zuhu162/dund-sys-client",
      thumbnail: Dunder,
      desc: "An office management tool inspired by the beloved sitcom, packed with features and visualizers to manage daily office tasks efficiently.",
      bgColor: "#ffffff",
    },
    {
      title: "Financier - Finance Management System",
      link: "https://github.com/Zuhu162/financier-complete",
      thumbnail: Financier,
      desc: "A comprehensive finance management app built with ReactJS, ExpressJS, and MongoDB to log and visualize financial transactions effectively.",
      bgColor: "#ffffff",
    },

    {
      title: "Screenshot Scraper",
      link: "https://github.com/Zuhu162/screenshot_scraper",
      thumbnail: Screenshot,
      desc: "Utilizing Puppeteer and Nodemailer, this program schedules and captures website screenshots at regular intervals, delivering them directly to your inbox.",
      bgColor: "#ffffff",
    },

    {
      title: "Pentest Tool - Ronas Network & Services",
      link: "https://pentest.ronasnetwork.com/",
      thumbnail: Pentest,
      desc: "A web-based multi-security testing platform developed during my internship at Ronas Network & Services in Cyberjaya, Malaysia.",
      bgColor: "#ffffff",
    },
  ];

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
};
