import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import WhatIBuild from "@/components/sections/WhatIBuild";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import EngineeringPhilosophy from "@/components/sections/EngineeringPhilosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <EngineeringPhilosophy />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
