import FunGames from "../../public/projects/FunGames.png";
import TodoList from "../../public/projects/TodoList.png";
import DanaMasaDepan from "../../public/projects/Dana Masa Depan.png";
import Absensi from "../../public/projects/Absensi Manual.png";
import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";
export const experience = [
  {
    title: "Coming Soon",
    url: "#",
    role: "Fullstack Developer",
    date: "-",
  },
  {
    title: "PT Fath Synergy Group",
    url: "https://fathforce.com/",
    role: "Fullstack Developer",
    date: "Des 2024 - Apr 2025",
  },
  {
    title: "PT Laskar Teknologi Mulia (CyberLabs)",
    url: "https://cyberlabs.co.id/",
    role: "Developer",
    date: "Okt - Des 2024",
  },
];

export const skills = [
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#264de4" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "React.js", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#68a063" },
  { name: "PHP", color: "#777bb4" },
  { name: "Laravel", color: "#ff2d20" },
  { name: "MySQL", color: "#00758f" },
  { name: "Git", color: "#f1502f" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Bootstrap", color: "#563d7c" },
  { name: "Figma", color: "#f24e1e" },
];

export const sosialLinks = [
  {
    name: "Github",
    href: "https://github.com/fjrfathurrahman",
    icon: Github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/fajarfathurrahman/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/fajarfathurrahman",
    icon: Instagram,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
  {
    name: "Dribbble",
    icon: Dribbble,
  }
];

export const projects = [
  {
    image: FunGames,
    title: "Fun Games",
    extra: "🏆 Champion 1 UI/UX in BlaBlaBla 🏆",
    description:
      "A game platform where developers can upload games and players can download them. Built with Next.js, Tailwind CSS, Axios, React Query, and Shadcn UI.",
    techStack: ["Next.js", "Tailwind CSS", "Axios", "React Query", "Shadcn UI"],
  },
  {
    image: TodoList,
    title: "TodoList",
    description:
      "A simple note-taking app where one project can have multiple tasks. Built using Laravel, Tailwind CSS, and Shadcn UI.",
    github: "https://github.com/fjrfathurrahman/Laravel-TodoList",
    techStack: ["Laravel", "Tailwind CSS", "Shadcn UI"],
  },
  {
    image: DanaMasaDepan,
    title: "Dana Masa Depan",
    description:
      "A digital savings platform designed for accounting students to manage transactions and savings data. Built with Next.js, Tailwind CSS, Axios, and React Query.",
    url: "https://dana-masadepan.vercel.app",
    github: "https://github.com/fjrfathurrahman/DanaMasaDepan-NextJS",
    techStack: ["Next.js", "Tailwind CSS", "Axios", "React Query"],
  },
  {
    image: Absensi,
    title: "Student Absensi",
    description:
      "An attendance web app that allows students to submit presence status (present/permission) with location support. Built using Next.js, Tailwind CSS, Axios, React Query, and Hero UI.",
    techStack: ["Next.js", "Tailwind CSS", "Axios", "React Query", "Hero UI"],
  },
];
