"use client";
import { useInView } from "react-intersection-observer";
import TitleSection from "./ui/TitleSection";
import CardProject from "./ui/CardProject";
import { projects } from "@/resources/data";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <main ref={ref} className="py-20">
      {inView && (
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-12">
          <TitleSection title="Projects" />

          <div className="w-full flex flex-col gap-32">
            {projects.map((item, i) => (
              <CardProject key={i} {...item} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
