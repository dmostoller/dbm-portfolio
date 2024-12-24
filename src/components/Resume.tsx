'use client';

import { FC } from 'react';

const Resume: FC = () => {
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="bg-terminal-color font-dos min-h-screen max-w-5xl mx-auto p-4">
      <div className="text-center">
        <div className="ascii-border mb-4 hidden md:block">
          ╔══════════════════════════════════════╗ 
          ║            RESUME OPTIONS            ║
          ╚══════════════════════════════════════╝
        </div>
      </div>

      <div className="space-y-8 px-6">
        <div className="mb-4">
          <div className="mb-4">C:\{'>'}Select viewing option:</div>
          
          <div className="mb-4">
            <button 
              onClick={openResume}
              className="inline-block px-4 py-2 hover:bg-[var(--button-bg)] hover:text-terminal-color"
            >
              [1] VIEW IN BROWSER
            </button>
          </div>
          
          <div className="mb-4">
            <a 
              href="/resume.pdf" 
              download
              className="inline-block px-4 py-2 hover:bg-[var(--button-bg)] hover:text-terminal-color"
            >
              [2] DOWNLOAD PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;