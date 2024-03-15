// import Image from "next/image";
import About from "@/components/About";
import HomePage from "@/components/HomePage"
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/ContactForm";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
