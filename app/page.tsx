// import Image from "next/image";
import About from "@/components/About";
import HomePage from "@/components/HomePage"
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
