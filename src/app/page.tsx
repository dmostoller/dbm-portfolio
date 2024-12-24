'use client';
import { useState } from 'react';
import CommandPrompt from "@/components/CommandPrompt";
import { projects } from "@/data/projects";
import RocketAnimation from '@/components/RocketAnimation';

const WELCOME_MESSAGE = `
Welcome to David Mostoller's Portfolio
Type 'help' for available commands
`;

export default function Home() {
  const [output, setOutput] = useState<string[]>([WELCOME_MESSAGE]);


  const handleCommand = (command: string) => {
    if (command === 'clear') {
      setOutput([WELCOME_MESSAGE]);
    } else if (command === 'dir') {
      setOutput(prev => [...prev, 
        'Directory of C:\\PROJECTS', 
        '------------------------', 
        '',
        ...projects.map(p => 
          `${p.title.padEnd(30)} <DIR>          ${p.stack.join(', ')}`
        ),
        '',
        `${projects.length} Project(s)`
      ]);
    } else {
      setOutput(prev => [...prev, command]);
    }
  };

  return (
    <main className="bg-terminal-color font-dos min-h-screen max-w-3xl mx-auto p-4">
      <div className="text-center">
              <RocketAnimation />
        {/* <pre className="ascii-border mb-4 hidden lg:block">
          {`
░█▀▄░█▀█░█░█░▀█▀░█▀▄░░░█▄█░█▀█░█▀▀░▀█▀░█▀█░█░░░█░░░█▀▀░█▀▄
░█░█░█▀█░▀▄▀░░█░░█░█░░░█░█░█░█░▀▀█░░█░░█░█░█░░░█░░░█▀▀░█▀▄
░▀▀░░▀░▀░░▀░░▀▀▀░▀▀░░░░▀░▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀
          `}
        </pre>
        <pre className="ascii-border mb-4 block lg:hidden">
          {`
░█▀▄░█▀█░█░█░▀█▀░█▀▄                
░█░█░█▀█░▀▄▀░░█░░█░█                
░▀▀░░▀░▀░░▀░░▀▀▀░▀▀░                
░█▄█░█▀█░█▀▀░▀█▀░█▀█░█░░░█░░░█▀▀░█▀▄
░█░█░█░█░▀▀█░░█░░█░█░█░░░█░░░█▀▀░█▀▄
░▀░▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀
          `}
        </pre> */}


      </div>

      <div className="space-y-4 mb-8">
        {output.map((line, i) => (
          <div key={i} className="font-dos whitespace-pre-wrap">{line}</div>
        ))}
      </div>

      <CommandPrompt onCommand={handleCommand} />
    </main>
  );
}