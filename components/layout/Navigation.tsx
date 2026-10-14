"use client";
import React from "react";
import { motion } from "motion/react";
import Menu from "./Menu";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { GITHUB_URL } from "@/lib/links";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 mt-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-lg shadow-black/10">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-white tracking-tight">
            MouhX
            <span className="text-blue-500 text-lg font-medium">Dev</span>
          </a>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* GitHub button */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>

          {/* Hamburger (mobile) */}
          <Menu links={navLinks} />
        </nav>
      </div>
    </motion.header>
  );
}
