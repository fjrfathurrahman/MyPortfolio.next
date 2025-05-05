import { sosialLinks } from "@/resources/data";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
const Footer = () => {
  return (
    <footer className="container mx-auto py-20 px-8 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
        <p>
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
        </p>

        <div className="flex gap-6 items-center justify-end lg:col-start-3">
          {sosialLinks.map((link) => <Link href={link.href || '#'} key={link.name} onClick={() => !link.href && toast.info("Coming Soon :)")} target={link.href ? "_blank" : "_self"} aria-label={`${link.name}`}><link.icon size={26}/></Link>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
