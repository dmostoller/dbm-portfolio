export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "Transforming the way job seekers optimize their resumes with AI-powered analysis and insights.",
    stack: ["Next.js", "Typescript", "Redis", "AI", "Mammoth", "String Similarity", "Fuse.js", "TailwindCSS"],
    links: {
      demo: "https://www.airesumeanalyzer.com",
      // github: "https://github.com/dmostoller/ai-resume-analyzer",
    },
  },
  {
    id: "form-accessibility-validator",
    title: "Form Accessibility Validator",
    description: "A browser extension that helps developers create more accessible web forms through real-time validation and suggestions.",
    stack: ["JavaScript", "Chrome Extensions API", "WCAG", "React", "TailwindCSS", "Vitest", "TypeScript", "Webpack"],
    links: {
      demo: "https://chrome.google.com/webstore/detail/form-accessibility-validator",
      github: "https://github.com/dmostoller/form-accessibility-validator-extension",
    },
  },
  {
    id: "philareact",
    title: "PhilaReact",
    description: "A community for React, Next.js, and TypeScript enthusiasts in Philadelphia.",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgresql", "TailwindCSS"],
    links: {
      demo: "https://www.philareact.org/",
      github: "https://github.com/dmostoller/philareact",
    },
  },
  // {
  //   id: "type-network",
  //   title: "TypeNetwork",
  //   description: "The world's best fonts.",
  //   stack: ["Next.js", "Typescript", "Django", "GraphQL", "Apollo", "Tachyons"],
  //   links: {
  //     demo: "https://typenetwork.com",
  //   },
  // },
  {
    id: "srs",
    title: "South River Studios",
    description: "Marketing, Blog and SEO Website for a Creative Agency",
    stack: ["Jekyll", "Bulma"],
    links: {
      demo: "https://southriverstudios.com",
    },
  },
  {
    id: "musicians-base",
    title: "Musician's Base",
    description: "Artist-Fan Interaction & Content Hub",
    stack: [
      "React",
      "Python",
      "Flask",
      "JavaScript",
      "SQLAlchemy",
      "GeoPy",
      "Cloudinary",
      "PostgreSQL",
      "WaveSurfer",
      "Semantic-UI"
    ],    links: {
      demo: "https://superluminalpsy.com",
    },
  },
  {
    id: "band-website",
    title: "Band Website & Music Player",
    description: "An immersive online music experience.",
    stack: ["React", "Javascript", "TailwindCSS", "Amazon S3", "WaveSurfer"],
    links: {
      demo: "https://www.spacejesus.com",
    },
  },
  {
    id: "artist-portfolio",
    title: "Social Artist Portfolio",
    description: "Interactive Artist Showcase & Engagement Platform",
    stack: ["Next.js","Typescript", "Prisma", "TailwindCSS", "PostgreSQL", "Cloudinary"],
    links: {
      demo: "https://www.yasminmostoller.com",
      github: "https://github.com/dmostoller/yasminmostoller",
    },
  },
  {
    id: "tutorbot",
    title: "TutorBot",
    description: "Contextual Video Chatbot Assistant",
    stack: [
      "React",
      "Python",
      "Flask",
      "JavaScript",
      "CSS",
      "ChatGPT",
      "Llama-Index"
    ],    links: {
      github: "https://github.com/dmostoller/tutorbot",
    },
  },
  {
    id: "invoice-creator",
    title: "Invoice Creator",
    description: "A user-friendly tool for creating invoices.",
    stack: ["React", "Javascript", "Tailwind"],
    links: {
      demo: "https://invoice-creator-cmsb.onrender.com/",
    },
  },
  {
    id: "mars-game",
    title: "Mars Game",
    description: "Oregon Trail: In Space",
    stack: ["Python", "SQLAlchemy", "Rich", "Playsound"],
    links: {
      github: "https://github.com/dmostoller/mars-base",
    },
  },
  {
    id: "taskmaster",
    title: "TaskMaster",
    description: "A sleek and functional task manager app.",
    stack: ["React", "Tailwind", "Django"],
    links: {
      github: "https://github.com/dmostoller/taskmaster",
    },
  },
];