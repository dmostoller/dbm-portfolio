"use client";
import { useState } from "react";
import Image from "next/image";
import { FC } from "react";
import Email from "./Email";

const AboutMe: FC = () => {
  const [showBikePhoto, setShowBikePhoto] = useState(false);

  return (
    <section className="max-w-5xl mx-auto p-4 bg-terminal-color font-dos min-h-screen">
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
          <div className="p-4 hidden md:block">
            <h2 className="font-semibold">Education</h2>
            <h3>Wesleyan University | Flatiron School</h3>
          </div>
        </div>
        <div>
          <p className="leading-relaxed mb-6">
            I&apos;m a full-stack software engineer who believes that the design
            of impactful and modern web technologies emerges from iterative,
            team collaborations.
          </p>
          <p className="leading-relaxed mb-6">
            I&apos;m currently building with TypeScript, React, Next.js, and
            Node.js. I have a background in audio engineering and music
            technology, and perform under the names{" "}
            <a
              href="https://superluminalpsy.com/"
              target="_blank"
              rel="noreferrer"
              className="text-violet-500"
            >
              Kabayun
            </a>{" "}
            and{" "}
            <a
              href="https://superluminalpsy.com/"
              target="_blank"
              rel="noreferrer"
              className="text-violet-500"
            >
              Superluminal
            </a>{" "}
            in my free time.
          </p>
          <p className="leading-relaxed mb-12">
            I also love to read sci-fi and ride my{" "}
            <span
              className="text-violet-500 cursor-pointer"
              onMouseEnter={() => setShowBikePhoto(true)}
              onMouseLeave={() => setShowBikePhoto(false)}
            >
              bicycle
            </span>
            .
          </p>
          <p className="font-semibold mb-2">C:\{">"} DIR SKILLS</p>
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
          <div className="mt-12 block md:hidden">
            <h2 className="font-semibold">Education</h2>
            <h3>Wesleyan University | Flatiron School</h3>
          </div>
        </div>
      </div>
      <Email />
    </section>
  );
};

export default AboutMe;
