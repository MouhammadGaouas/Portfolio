"use client";
import React from "react";
import { motion } from "motion/react";

const techStack = [
  { name: "React", icon: "/react-svgrepo-com.svg" },
  { name: "Next.js", icon: "/nextjs-fill-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/typescript-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Python", icon: "python-svgrepo-com.svg" },
  { name: "Git", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎭" },
  { name: "Figma", icon: "🖌️" },
];

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof techStack;
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate the list for seamless looping
  const duplicated = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4 shrink-0 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
          >
            <img width={40} src={tech.icon} alt="" />
            <span className="text-base font-medium text-neutral-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const firstHalf = techStack.slice(0, Math.ceil(techStack.length / 2));
  const secondHalf = techStack.slice(Math.ceil(techStack.length / 2));

  return (
    <section id="skills" className="relative z-10 w-full py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-16 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-400 text-center mt-4 text-base md:text-lg"
        >
          Technologies and tools I work with
        </motion.p>
      </div>

      {/* Marquee rows — full width, no max-w constraint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <MarqueeRow items={firstHalf} direction="left" speed={25} />
        <MarqueeRow items={secondHalf} direction="right" speed={30} />
      </motion.div>
    </section>
  );
}

