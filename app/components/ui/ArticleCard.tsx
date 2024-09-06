"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Avatar from "../../../public/instasize_240819172248.jpg";
import Link from "next/link";

interface ArticleCardProps {
  name: string;
  title: string;
  background: string;
  date: string;
  link: string;
}

export function ArticleCard({
  name,
  background,
  title,
  link,
}: ArticleCardProps) {
  return (
    <div className="w-full flex p-5 bg-white hover:bg-slate-300 mb-5 rounded-sm shadow-md hover:-translate-y-2 transition ease-in-out cursor-pointer">
      <div className="w-full flex-col">
        <div className="w-full flex gap-2 mb-5">
          <Image
            src={Avatar}
            width={20}
            height={20}
            alt="avatar"
            style={{
              borderRadius: "100%",
              border: "1px solid white",
            }}></Image>
          <p className="text-slate-500 text-xs mt-1">{name}</p>
        </div>
        <p className="text-black font-extrabold text-2xl">{title}</p>
      </div>
      <div className="w-full hidden xl:flex justify-end">
        <Image
          width={0}
          height={0}
          alt="articleImage"
          style={{ width: "50%", borderRadius: "5px" }}
          src={background}></Image>
      </div>
    </div>
  );
}
