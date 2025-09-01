"use client";
import { useState } from "react";
import Image from "next/image";
import { FC } from "react";
import Email from "./Email";

const AboutMe: FC = () => {
  const [showBikePhoto, setShowBikePhoto] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

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
          <div className="px-4 pt-4 hidden md:block">
            <h2 className="font-semibold mb-1">Education</h2>
            <h3>Wesleyan University | Flatiron School</h3>
          </div>
          <div className="px-4 py-2 hidden md:block">
            <h2 className="font-semibold mb-1">Work</h2>
            <h3>
              Currently engineering solutions @{" "}
              <a
                href="https://corporate.comcast.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 font-dos hover:text-amber-500 cursor-pointer"
              >
                Comcast
              </a>
            </h3>
          </div>
        </div>
        <div>
          <p className="leading-relaxed mb-6">
            I&apos;m a{" "}
            <span className="text-[var(--theme-highlight)]">
              full-stack software engineer
            </span>{" "}
            who believes that the design of impactful web technologies emerges
            from iterative, team collaborations. I&apos;m currently building
            with TypeScript, React, Next.js, and Python.
          </p>
          <p className="leading-relaxed mb-6">
            I have a background in audio engineering and music technology, and
            perform under the name{" "}
            <a
              href="https://superluminalpsy.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--theme-highlight)]"
            >
              Kabayun
            </a>{" "}
            in my free time.
          </p>
          <p className="leading-relaxed mb-6">
            When at home in Philly, I am often on my{" "}
            <span
              className="text-[var(--theme-highlight)] cursor-pointer"
              onMouseEnter={() => setShowBikePhoto(true)}
              onMouseLeave={() => setShowBikePhoto(false)}
            >
              bicycle
            </span>{" "}
            or reading a sci-fi novel. Get in{" "}
            <span
              className="underline underline-offset-4 font-dos hover:text-amber-500 cursor-pointer"
              onClick={() => setShowEmailModal(true)}
            >
              touch
            </span>
            .
          </p>
          <Email
            isOpen={showEmailModal}
            onClose={() => setShowEmailModal(false)}
          />
          <h2 className="font-semibold mt-6">Skills</h2>

          <div className="flex justify-start mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2">
              <ul className="space-y-2">
                <li className="flex items-center">► TypeScript/JavaScript</li>
                <li className="flex items-center">► React.js/Next.js</li>
                <li className="flex items-center">► Tailwind CSS/GraphQL</li>
                <li className="flex items-center">► PostgreSQL/SQLite</li>
                <li className="flex items-center">► AWS/Cloud Architecture</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">► Python/Django/Flask</li>
                <li className="flex items-center">► CI/CD & DevOps</li>
                <li className="flex items-center">► Git/GitHub/Jest/Figma</li>
                <li className="flex items-center">
                  ► Node.js/Prisma/REST APIs
                </li>
              </ul>
            </div>
          </div>
          <div className="block md:hidden">
            <h2 className="font-semibold mt-6 mb-2">Education</h2>
            <h3>Wesleyan University | Flatiron School</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
