"use client";
import Link from "next/link";
import TitleSection from "./ui/TitleSection";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/resources/data";
import { toast } from "sonner";
import View from "./ui/View";

const Experience = () => {
  return (
    <View>
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12">
        <TitleSection title="Experience" />
        <div className="w-full flex flex-col gap-8">
          {experiences.map((exp) => (
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

          <button className="group w-max mt-12 flex items-center gap-2 cursor-pointer" onClick={() => toast.info("Coming Soon :)")}>
            <span className="font-semibold text-lg tracking-wide leading-snug">
              View My Resume
            </span>
            <ArrowRight className="transition-all duration-500 group-hover:ms-2 text-blue-500" />
          </button>
        </div>
      </div>
    </View>
  );
};

export default Experience;
