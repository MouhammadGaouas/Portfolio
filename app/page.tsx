import { BackgroundBeams } from "@/components/ui/background-beams";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full flex-1 bg-neutral-950 relative flex flex-col items-center antialiased overflow-x-hidden">
      {/* Persistent animated background — fixed to viewport so it stays visible while scrolling */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <BackgroundBeams />
      </div>

      {/* Hero */}
      <div className="relative min-h-svh w-full flex items-center justify-center">
        <Header />
      </div>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </div>
  );
}
