import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Zuhayer",
  keywords:
    "Zuhayer, Zuhayer Siddique, Zuhayer Adnan Siddique, Software Engineer, MERN Stack Developer, React Developer, JavaScript, TypeScript, NextJS, University of Technology Malaysia, Software Engineering Student, Project Portfolio",
  description:
    "Explore the portfolio of Zuhayer a software engineer specializing in MERN Stack development. View projects, skills, and download my resume",
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
