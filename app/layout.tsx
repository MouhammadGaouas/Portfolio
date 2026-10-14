import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mouhammad Gaouas — Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Mouhammad Gaouas, a full-stack developer building modern, performant web applications with clean code and creative design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
