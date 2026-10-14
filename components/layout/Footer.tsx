import { GITHUB_URL } from "@/lib/links";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xl font-bold text-white tracking-tight">
          MouhX
          <span className="text-blue-500 text-sm font-medium">Dev</span>
        </p>
        <p className="text-sm text-neutral-500">
          © {year} Mouhammad Gaouas. All rights reserved.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
