"use client";
import React from "react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <section className="relative z-10 flex items-center justify-center w-full px-6 md:px-16 py-20">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Greeting pill */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm tracking-widest uppercase text-neutral-400"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none"
        >
          Mouhammad{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Gaouas
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-3xl lg:text-4xl text-neutral-300 font-light"
        >
          Full-Stack Developer{" "}
          <span className="font-medium text-green-400">&amp;</span> Software
          Engineer
        </motion.h2>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl text-base md:text-lg text-neutral-500 leading-relaxed"
        >
          Building modern web experiences with clean code and creative design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-4 mt-2"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors duration-200"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium text-sm transition-colors duration-200"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
