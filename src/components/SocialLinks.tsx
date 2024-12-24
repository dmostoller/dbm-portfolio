'use client';

import { useEffect, useState } from 'react';
import { Drawer } from 'vaul';

const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const SocialLinksContent = () => (
    <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto p-2 sm:p-3 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 font-dos">
        <a 
          href="https://github.com/dmostoller" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [GITHUB]
        </a>
        <a 
          href="https://linkedin.com/in/david-mostoller" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [LINKEDIN]
        </a>
        <a 
          href="https://medium.com/@dmostoller" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [MEDIUM]
        </a>
        <a 
          href="https://bsky.app/profile/davemostoller.bsky.social" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [BLUESKY]
        </a>
        <a 
          href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [CALENDLY]
        </a>
        <a 
          href="mailto:dave.mostoller.dev@gmail.com"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 text-center border border-[var(--terminal-color)]"
        >
          [EMAIL]
        </a>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer.Root>
        <Drawer.Trigger className="fixed bottom-10 left-0 right-0 h-2 bg-[var(--theme-bg)]">
          {/* <div className="w-12 h-2 mx-auto bg-[var(--terminal-color)] rounded-full" /> */}
          <button 
            className="px-4 py-2 text-sm font-semibold bg-[var(--button-bg)] font-dos"
          >
            Connect With Me
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-[var(--theme-bg)] fixed bottom-0 left-0 right-0 mt-24 h-fit rounded-t-[10px] border-t border-[var(--terminal-color)]">
            <div className="w-12 h-2 mx-auto bg-[var(--terminal-color)] rounded-full" />
            <SocialLinksContent />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
  <footer className="fixed bottom-0 left-0 right-0 bg-[var(--theme-bg)] border-t border-[var(--terminal-color)] z-10">
      <SocialLinksContent />
    </footer>
  );
};

export default SocialLinks;