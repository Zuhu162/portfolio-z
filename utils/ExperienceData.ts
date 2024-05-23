import SDA from "../public/Exp/SDA.png";
import RNS from "../public/Exp/RNS.png";
import AFU from "../public/Exp/AFU.png";

const experienceData = [
  {
    id: 1,
    name: "Summer Digital Agency",
    location: "Brisbane, Australia",
    position: "FullStack Web Developer",
    date: "01/24 - 06/24",
    link: "https://www.summerdigital.agency/",
    img: SDA,
  },
  {
    id: 2,
    name: "Ronas Network & Services",
    location: "Cyberjaya, Malaysia",
    position: "Software Engineer Intern",
    date: "08/23 - 02/24",
    link: "https://ronasnetwork.com/",
    img: RNS,
  },
  {
    id: 3,
    name: "AFUbot",
    location: "Johore, Malaysia",
    position: "Software Engineer",
    date: "06/24 - 02/24",
    link: "https://www.afubot.com/",
    img: AFU,
  },
];

const getExperienceData = () => {
  return experienceData;
};

export default getExperienceData;
