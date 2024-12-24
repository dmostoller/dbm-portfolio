const SocialLinks = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-terminal-black border-t border-[var(--terminal-color)] z-10">
      <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto p-2 sm:p-3 md:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          <a 
            href="https://github.com/dmostoller" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
          >
            [GITHUB.COM]
          </a>
          <a 
            href="https://linkedin.com/in/davidmostoller" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
          >
            [LINKEDIN.COM]
          </a>
          <a 
            href="https://medium.com/@dmostoller" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
          >
            [MEDIUM.COM]
          </a>
          <a 
            href="https://bsky.app/profile/davemostoller.bsky.social" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
          >
            [BLUESKY.APP]
          </a>
                    <a 
            href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
          >
            [CALENDLY.COM]
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;