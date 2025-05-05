"use client";
import TitleSection from "./ui/TitleSection";
import View from "./ui/View";

const About = () => {
  return (
    <View>
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12">
          <TitleSection title="About" />
          <div>
            <p className="hover:ms-2 duration-500 select-text">
              Hi! I&nbsp;m <span className="font-semibold underline underline-offset-4 decoration-sky-500">Fajar Fathurrahman Ramdahani,</span> a fresh graduate from a
              vocational high school majoring in <span className="font-semibold underline underline-offset-4 decoration-pink-500">Software Engineering (RPL),</span>{' '}
              born on September 25, 2006. I’m passionate about crafting and user-friendly websites, with a strong interest in
              frontend development and web design.
            </p>
            <p className="hover:ms-2 duration-500 select-text mt-4">
              My goal is to keep growing as a developer and contribute to
              building web applications that not only function smoothly but also
              leave a lasting visual impression.
            </p>
            <p className="hover:ms-2 duration-500 select-text mt-4">
              Every line of code I write is a step forward in my journey to
              create something impactful. I’m always eager to learn, explore new
              tools, and face challenges that push me to become better.
            </p>
          </div>
        </div>
    </View>
  );
};

export default About;
