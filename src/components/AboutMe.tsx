'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FC } from 'react';

const AboutMe: FC = () => {
  const [showBikePhoto, setShowBikePhoto] = useState(false);

  return (
    <section className="max-w-5xl mx-auto p-4 bg-terminal-black font-dos">
      <div className="ascii-border mb-4 hidden md:block">
        ╔═══════════════════════════════════════╗
        ║           ABOUT.TXT                   ║
        ╚═══════════════════════════════════════╝
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
        <div className="relative h-[450px] w-full">
          <Image
            src={showBikePhoto ? "/images/bike.jpg" : "/images/headshot.png"}
            alt={showBikePhoto ? "David on bike" : "David Mostoller"}
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
        <div className="p-4">
              <h2 className="text-lg font-semibold">Education</h2>
              <h3 className="text-md font-medium">Wesleyan University | Flatiron School</h3>
        </div>
        </div>
        <div className="space-y-4">
          {/* <p className="mb-4">C:\{">"}TYPE PROFILE.TXT</p> */}
          
          <p className="leading-relaxed">
            Full-stack software engineer specializing in modern web technologies
            and distributed systems. Currently building with TypeScript, React, Next.js,
            and Node.js. Background in audio engineering and music technology.
          </p>
          <p className="leading-relaxed">
            In my free time you can catch me exploring Philly on my{' '}
            <span 
              className="text-terminal-white cursor-pointer"
              onMouseEnter={() => setShowBikePhoto(true)}
              onMouseLeave={() => setShowBikePhoto(false)}
            >
              bike
            </span> or enjoying a good sci-fi book.
          </p>

          <p className="mt-6 mb-2">C:\{">"} DIR SKILLS</p>

        <section className="mb-12">
          <div className="grid gap-4">
          </div>
        </section>
          
          <ul className="space-y-2 pl-4">
            <li className="flex items-center">► TypeScript/JavaScript</li>
            <li className="flex items-center">► React.js/Next.js</li>
            <li className="flex items-center">► Tailwind CSS/GraphQL</li>
            <li className="flex items-center">► Node.js/Prisma/REST APIs</li>
            <li className="flex items-center">► Python/Django/Flask</li>
            <li className="flex items-center">► PostgreSQL/SQLite</li>
            <li className="flex items-center">► AWS/Cloud Architecture</li>
            <li className="flex items-center">► CI/CD & DevOps</li>
            <li className="flex items-center">► Git/GitHub/Jest/Figma</li>
          </ul>
        </div>

        
      </div>
    </section>
  );
};

export default AboutMe;