import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-terminal-black z-50 py-4">
      <div className="max-w-screen-2xl mx-auto text-center font-dos">
        <div className="ascii-border mb-4 text-sm sm:text-md md:text-base lg:text-xl xl:text-xl">
                    <div className="hidden xl:block">
        ╔═════════════════════════╗
        ║                                 ║
        ║          DAVID MOSTOLLER        ║
        ║        SOFTWARE ENGINEER        ║
        ║                                 ║
        ╚═════════════════════════╝
          </div>
          <div className="hidden lg:block xl:hidden">
        ╔═════════════╗
        ║                                 ║
        ║          DAVID MOSTOLLER        ║
        ║        SOFTWARE ENGINEER        ║
        ║                                 ║
        ╚═════════════╝
          </div>
        <div className="hidden md:block lg:hidden">
            ╔═══════════════╗
            ║         DAVID MOSTOLLER     ║
            ║       SOFTWARE ENGINEER     ║
            ╚═══════════════╝
          </div>
          <div className="block md:hidden">
            ╔═╗
            ║  DAVID MOSTOLLER ║
            ║ SOFTWARE ENGINEER ║
            ╚═╝
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 px-2">
          <Link href="/" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            [HOME.EXE]
          </Link>
          <Link href="/about" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            [ABOUT.TXT]
          </Link>
          <Link href="/blog" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            [BLOG.TXT]
          </Link>
          <Link href="/projects" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            [PROJECTS.DIR]
          </Link>
          <Link href="/resume" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            [RESUME.PDF]
          </Link>
        </nav>
    </div>
    </header>
  );
};

export default Header;
