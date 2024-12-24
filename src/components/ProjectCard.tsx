import { Project } from '@/data/projects';

type ProjectCardProps = Project;

const ProjectCard = ({ title, description, stack, links }: ProjectCardProps) => {
  return (
    <div className="border border-[var(--terminal-color)] p-4 mb-4">
      <div className="text-terminal-white mb-2">
        └─► {title}
      </div>
      <div className="mb-4">
        <p className="text-[var(--terminal-color)]/70">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((tech, index) => (
            <span key={index} className="bg-[var(--terminal-color)] text-terminal-black px-2 py-1 text-sm">{tech}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-4 py-2">
            [SOURCE]
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className=" hover:bg-[var(--terminal-color)] hover:text-terminal-black px-4 py-2">
            [WEBSITE]
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;