"use client";
import TitleSection from "./ui/TitleSection";
import { skills } from "@/resources/data";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <main ref={ref} className="py-20">
      {inView && (
        <div className="flex flex-col sm:flex-row gap-12 max-w-6xl mx-auto">
          <TitleSection title="Skills" />
          <div className="sm:gap-4 gap-2 flex sm:justify-center flex-wrap">
            {skills.map((skill) => (
              <div key={skill.name} className="py-2 px-4 rounded-2xl border-[1.5px] hover:scale-105 duration-300 ease-in-out">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Skills;
