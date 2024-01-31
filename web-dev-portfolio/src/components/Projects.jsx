import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pb-16"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
