"use client";
import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full px-6 md:px-16 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/10 p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — bio text */}
            <div className="flex flex-col gap-5">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Hi there! I&apos;m{" "}
                <span className="text-white font-medium">
                  Mouhammad Gaouas
                </span>
                , a passionate Full-Stack Developer and Software Engineer who
                loves building modern, performant web applications.
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                I enjoy turning complex problems into simple, elegant solutions.
                My focus is on creating user experiences that are both beautiful
                and functional, using cutting-edge technologies.
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or learning
                something new.
              </p>
            </div>

            {/* Right — quick info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Projects", value: "3+" },
                { label: "Technologies", value: "15+" },
                { label: "Commitment", value: "100%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-blue-400">
                    {item.value}
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

