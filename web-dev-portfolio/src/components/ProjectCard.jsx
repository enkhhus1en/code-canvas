import { styles } from "../styles";
import { arrow } from "../assets";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-col gap-2">
      <img src={project.image} alt={project.id} className="w-full" />
      <div className="mt-5 mb-2 flex justify-start items-center gap-2">
        <h1 className="font-heading text-[28px] text-white">{project.title}</h1>
        <img src={arrow} alt="arrow" className="h-6" />
      </div>
      <p className={`${styles.paragraph}`}>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
