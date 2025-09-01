import Image from "next/image";
import Hero from "@/components/Hero";
import Scripts from "@/components/Scripts";
import Navigation from "@/components/Navigation";
import SpotlightBackground from "@/components/SpotlightBackground";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <>
      <Scripts />
      <Navigation />

      <Hero />

      <SpotlightBackground />
      
      <ScrollSection id="about">
        <Quote />
      </ScrollSection>
      
      {/* Experience first */}
      <ScrollSection id="experience">
        <Experience />
      </ScrollSection>

      {/* Skills second */}
      <ScrollSection id="skills">
        <Skills />
      </ScrollSection>

      {/* Projects last */}
      <ScrollSection id="projects">
        <Projects />
      </ScrollSection>
      
      <ScrollSection id="blogs">
        <Blog />
      </ScrollSection>
      
      <ScrollSection>
        <Footer />
      </ScrollSection>
    </>
  );
}
