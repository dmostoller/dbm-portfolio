"use client";

import { Drawer } from "vaul";
import { useState } from "react";
import Email from "./Email";

const SocialLinks = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const SocialLinksContent = () => (
    <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto p-2 sm:p-3 md:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 font-dos">
        <a
          href="https://github.com/dmostoller"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [GITHUB]
        </a>
        <a
          href="https://linkedin.com/in/david-mostoller"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [LINKEDIN]
        </a>
        <a
          href="https://medium.com/@dmostoller"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [MEDIUM]
        </a>
        <a
          href="https://bsky.app/profile/davemostoller.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [BLUESKY]
        </a>
        <a
          href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [CALENDLY]
        </a>
        <button
          onClick={() => setShowEmailModal(true)}
          className="hover:bg-[var(--button-bg)] hover:text-terminal-color text-md sm:text-base py-2 sm:py-2 text-center"
        >
          [CONTACT]
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Drawer.Root>
        <Drawer.Trigger className="fixed bottom-10 left-0 right-0 h-4 flex justify-center lg:hidden">
          <div className="px-4 py-2 w-44 text-sm font-semibold bg-[var(--button-bg)] font-dos">
            Connect With Me
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-[var(--theme-bg)] fixed bottom-0 left-0 right-0 mt-24 h-fit rounded-t-[10px] border-t border-[var(--terminal-color)]">
            <Drawer.Title className="sr-only">Connect With Me</Drawer.Title>
            <Drawer.Description className="sr-only">
              Social media links and contact information
            </Drawer.Description>
            <div className="w-12 h-2 mt-1 mx-auto bg-[var(--terminal-color)] rounded-full" />
            <SocialLinksContent />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <footer className="fixed bottom-0 left-0 right-0 bg-[var(--theme-bg)] z-10 hidden lg:block">
        <SocialLinksContent />
      </footer>
      <Email isOpen={showEmailModal} onClose={() => setShowEmailModal(false)} />
    </>
  );
};

export default SocialLinks;
