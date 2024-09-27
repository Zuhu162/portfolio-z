import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Zuhayer Siddique",
  keywords:
    "Zuhayer, Zuhayer Bangladesh, Zuhayer Malaysia, Zuhayer UTM, Zuhayer Universiti Teknologi Malaysia, Zuhayer Siddique, Zuhayer Adnan Siddique, Software Engineer Bangladesh, Software Engineer, MERN Stack Developer, React Developer, JavaScript, TypeScript, NextJS, University of Technology Malaysia, Software Engineering Student, Project Portfolio",
  description:
    "Software engineer specializing in MERN Stack development. Explore my projects, skills, and resume.",
  openGraph: {
    images: "https://zuhu.dev/opengraph-image.png",
  },
  icons: {
    icon: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/Favicons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/Favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/Favicons/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
