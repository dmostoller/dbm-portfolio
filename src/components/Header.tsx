"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--theme-bg)] z-50 py-4 border-none md:border-b border-[var(--terminal-color)]">
      <div className="max-w-screen-2xl mx-auto text-center font-dos">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-4 right-4 bg-[var(--theme-bg)] border border-[var(--terminal-color)] hover:bg-[var(--button-bg)] font-mono whitespace-pre shadow shadow-[var(--theme-bg)]"
          aria-label="Toggle menu"
        >
          <Menu className="h-8 w-8" />
        </button>

        <div
          className={`
          md:hidden fixed top-0 right-0 h-full w-full 
          bg-[var(--theme-bg)] 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          z-50 pt-16
        `}
        >
          <div className="px-4 py-2 border-b text-xl border-[var(--terminal-color)] mb-4">
            ╔═ MENU ═╗
          </div>
          <nav className="flex flex-col gap-2 px-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-lg ${
                pathname === "/"
                  ? "bg-[var(--button-bg)]"
                  : "hover:bg-[var(--button-bg)]"
              }`}
            >
              C:\\&gt; HOME.EXE
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-lg ${
                pathname === "/about"
                  ? "bg-[var(--button-bg)]"
                  : "hover:bg-[var(--button-bg)]"
              }`}
            >
              C:\\&gt; ABOUT.TXT
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-lg ${
                pathname === "/blog"
                  ? "bg-[var(--button-bg)]"
                  : "hover:bg-[var(--button-bg)]"
              }`}
            >
              C:\\&gt; BLOG.TXT
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-lg ${
                pathname === "/projects"
                  ? "bg-[var(--button-bg)]"
                  : "hover:bg-[var(--button-bg)]"
              }`}
            >
              C:\\&gt; PROJECTS.DIR
            </Link>
            <Link
              href="/resume"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 text-lg ${
                pathname === "/resume"
                  ? "bg-[var(--button-bg)]"
                  : "hover:bg-[var(--button-bg)]"
              }`}
            >
              C:\\&gt; RESUME.PDF
            </Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 px-2 text-2xl py-1 hover:bg-[var(--button-bg)]"
          >
            [X]
          </button>
        </div>

        <div className="hidden md:block ascii-border mb-4 text-base md:text-xl xl:text-xl">
          <div className="hidden xl:block">
            ╔═════════════════════════╗ ║ ║ ║ DAVID MOSTOLLER ║ ║ ║
            ╚═════════════════════════╝
          </div>
          <div className="hidden lg:block xl:hidden">
            ╔═════════════╗ ║ ║ ║ DAVID MOSTOLLER ║ ║ ║ ╚═════════════╝
          </div>
          <div className="hidden md:block lg:hidden">
            ╔═══════════════╗ ║ DAVID MOSTOLLER ║ ╚═══════════════╝
          </div>
        </div>

        <nav className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 px-2">
          <Link
            href="/"
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base ${
              pathname === "/"
                ? "bg-[var(--button-bg)]"
                : "hover:bg-[var(--button-bg)] hover:text-terminal-color"
            }`}
          >
            [HOME.EXE]
          </Link>
          <Link
            href="/about"
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base ${
              pathname === "/about"
                ? "bg-[var(--button-bg)]"
                : "hover:bg-[var(--button-bg)] hover:text-terminal-color"
            }`}
          >
            [ABOUT.TXT]
          </Link>
          <Link
            href="/blog"
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base ${
              pathname === "/blog"
                ? "bg-[var(--button-bg)]"
                : "hover:bg-[var(--button-bg)] hover:text-terminal-color"
            }`}
          >
            [BLOG.DIR]
          </Link>
          <Link
            href="/projects"
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base ${
              pathname === "/projects"
                ? "bg-[var(--button-bg)]"
                : "hover:bg-[var(--button-bg)] hover:text-terminal-color"
            }`}
          >
            [PROJECTS.DIR]
          </Link>
          <Link
            href="/resume"
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base ${
              pathname === "/resume"
                ? "bg-[var(--button-bg)]"
                : "hover:bg-[var(--button-bg)] hover:text-terminal-color"
            }`}
          >
            [RESUME.PDF]
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
