"use client";
import Link from "next/link";
import TitleSection from "./ui/TitleSection";
import { ArrowRight } from "lucide-react";
import { experience } from "@/resources/data";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <main ref={ref} className="py-20">
      {inView && (
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-12">
          <TitleSection title="Experience" />
          <div className="w-full flex flex-col gap-8">
            {experience.map((exp) => (
              <div key={exp.title}>
                <ul className="flex sm:items-center flex-col sm:flex-row justify-between list-disc">
                  <li className="font-semibold tracking-wide">
                    <Link href={exp.url}>{exp.title}</Link>
                  </li>
                  <li className="font-mono text-sm list-none">{exp.date}</li>
                </ul>
                <p>{exp.role}</p>
              </div>
            ))}

            <button className="group border rounded-2xl py-3 px-8 w-max mt-12 flex items-center gap-2 cursor-pointer">
              <span className="font-semibold text-lg tracking-wide leading-snug">
                View My Resume
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:ms-2" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Experience;
