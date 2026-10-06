"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased overflow-x-hidden">
      {/* Hero */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <Header />
        <BackgroundBeams />
      </div>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />
    </div>
  );
}
