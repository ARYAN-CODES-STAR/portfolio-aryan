// import Image from "next/image";
import About from "@/components/About";
import HomePage from "@/components/HomePage"
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
    </div>
  );
}
