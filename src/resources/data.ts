import FunGames from "../../public/projects/FunGames.png";
import TodoList from "../../public/projects/TodoList.png";
import DanaMasaDepan from "../../public/projects/Dana Masa Depan.png";
import Absensi from "../../public/projects/Absensi Manual.png";
import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const experiences = [
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
    title: "Magang PT Laskar Teknologi Mulia (CyberLabs)",
    url: "https://cyberlabs.co.id/",
    role: "Developer",
    date: "Okt - Des 2024",
  },
];

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "HTML", color: "#e34c26" },
      { name: "CSS", color: "#264de4" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "PHP", color: "#777bb4" },
    ],
  },
  {
    title: "Library & Framework",
    items: [
      { name: "React.js", color: "#61dafb" },
      { name: "React Query", color: "#ff3e00" },
      { name: "Axios", color: "#f7df1e" },
      { name: "Framer Motion", color: "#ff3e00" },
      { name: "Shadcn UI", color: "#ff3e00" },
      { name: "Next.js", color: "#000000" },
      { name: "Node.js", color: "#68a063" },
      { name: "Laravel", color: "#ff2d20" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "Bootstrap", color: "#563d7c" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#333" },
      { name: "VS Code", color: "#007acc" },
      { name: "Figma", color: "#333" },
      { name: "Notion", color: "#000000" },
    ],
  },
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
  },
];

export const projects = [
  {
    image: FunGames,
    title: "Fun Games",
    extra: "🏆 Champion 1 Web Tecnologis 2025 🏆",
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
