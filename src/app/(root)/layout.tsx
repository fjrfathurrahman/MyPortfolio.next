'use client'
import Footer from "@/components/layouts/Footer";
import AnimatedCursor from "react-animated-cursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="hidden sm:block">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{ backgroundColor: "var(--cursor-color)" }}
          outerStyle={{ border: "3px solid var(--cursor-color)" }}
        />
      </div>
      <main className="container mx-auto sm:px-12 px-8">{children}</main>
      <Footer />
    </section>
  );
}
