"use client";
import TitleSection from "./ui/TitleSection";
import { skills } from "@/resources/data";
import View from "./ui/View";
import dynamic from "next/dynamic";

const MotionComponent = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

const Skills = () => {
  return (
    <View>
      <div className="flex flex-col xl:flex-row gap-12 max-w-6xl mx-auto">
        <TitleSection title="Skills" />
        <div className="sm:gap-4 gap-2 flex sm:justify-center flex-wrap">
          {skills.map((skill, i) => (
            <MotionComponent
              key={i}
              initial={{ opacity: 0, y: 140, filter: "blur(7px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, stiffness: 70, type: "spring" }}
            >
              <div className="py-2 px-4 rounded-2xl border-[1.5px] hover:scale-110 duration-300 ease-in-out">
                {skill.name}
              </div>
            </MotionComponent>
          ))}
        </div>
      </div>
    </View>
  );
};

export default Skills;
