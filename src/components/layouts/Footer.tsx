import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
const Footer = () => {
  const sosialLinks = [
    {
      name: "Github",
      href: "https://github.com/fajarfathurrahman",
      icon: <Github size={28} />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/fajarfathurrahman/",
      icon: <Linkedin size={28} />,
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/fajarfathurrahman",
      icon: <Dribbble size={28} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/fajarfathurrahman",
      icon: <Instagram size={28} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/fajarfathurrahman",
      icon: <Twitter size={28} />,
    },
  ];
  return (
    <footer className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-12">
        <p>
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
          text is set in the Inter typeface.
        </p>

        <div className="flex gap-6 items-center justify-end sm:col-start-3">
          {sosialLinks.map((link) => (
            <Link href={link.href} key={link.name} target="_blank" aria-label={`${link.name}`}>{link.icon}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
