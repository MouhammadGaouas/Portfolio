"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import GitHubIcon from "@/components/icons/GitHubIcon";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description:
      "A modern e-commerce website where users can browse products, explore categories, add items to their cart, and shop online through a simple and user-friendly interface",
    image: "/e-commerce.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "better-auth"],
    github: "https://github.com/MouhammadGaouas/e-commerce-website",
  },

];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
        >
          <GitHubIcon className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full px-6 md:px-16 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-400 text-center mt-4 mb-12 text-base md:text-lg"
        >
          A selection of things I&apos;ve built
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
