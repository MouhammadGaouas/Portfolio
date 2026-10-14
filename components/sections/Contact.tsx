"use client";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { EMAIL, GITHUB_URL } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 w-full px-6 md:px-16 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-400 text-center mt-4 mb-12 text-base md:text-lg"
        >
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/10 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-white text-lg md:text-xl font-medium">
                Let&apos;s build something together
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-base md:text-lg"
              >
                {EMAIL}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors duration-200"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
