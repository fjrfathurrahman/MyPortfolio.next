"use client";
import { projects } from "@/resources/data";
import TitleSection from "./ui/TitleSection";
import CardProject from "./ui/CardProject";
import View from "./ui/View";
import dynamic from "next/dynamic";

const MotionComponent = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const Projects = () => {
  return (
    <View>
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12">
        <TitleSection title="Projects" />
        <div className="w-full flex flex-col gap-32">
          {projects.map((item, i) => (
            <MotionComponent
              key={i}
              initial={{ opacity: 0, x: 140, filter: "blur(7px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, stiffness: 70, type: "spring" }}
            >
              <CardProject {...item} />
            </MotionComponent>
          ))}
        </div>
      </div>
    </View>
  );
};

export default Projects;
