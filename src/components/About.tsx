"use client";
import { useInView } from "react-intersection-observer";
import React from "react";
import TitleSection from "./ui/TitleSection";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <main ref={ref} id="about" className="py-20">
      {inView && (
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-12">
          <TitleSection title="About" />
          <p className="hover:ms-2 duration-500 select-text">
            I&apos;m currently an Engineer at Upstatement building things for
            the web with some awesome people. <br />I recently graduated from
            Northeastern University after completing three awesome six-month
            co-ops at MullenLowe U.S., Starry, and Apple Music. As a software
            engineer, I enjoy bridging the gap between engineering and design —
            combining my technical knowledge with my keen eye for design to
            create a beautiful product. My goal is to always build applications
            that are scalable and efficient under the hood while providing
            engaging, pixel-perfect user experiences. When I&apos;m not in front
            of a computer screen, I&apos;m probably snowboarding, cruising
            around on my penny board, or crossing off another item on my bucket
            list.
          </p>
        </div>
      )}
    </main>
  );
};

export default About;
