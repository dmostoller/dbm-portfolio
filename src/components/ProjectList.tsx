import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="bg-terminal-color font-dos max-w-5xl mx-auto p-4">
      <div className="ascii-border mb-4 text-left font-bold text-lg text-[var(--theme-highlight)]">
        C:\\&gt; PROJECTS.DIRECTORY
      </div>
      <div className="grid gap-4 md:grid-cols-2 px-0 md:px-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
