import Image from "next/image";
import React from "react";
import Meme from "../../public/meme 1.png";

const Footer = () => {
  return (
    <div className="backdrop-brightness-50 h-[45vh] border-t border-base-200 w-full flex flex-col gap-5 justify-center items-center">
      <Image width={250} height={250} src={Meme} alt="Jerry Smith Meme" />
      <p>Zuhayer Adnan Siddique ©</p>
    </div>
  );
};

export default Footer;
