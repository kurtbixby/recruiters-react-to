import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../../data/projects";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(projectData);
    setProjects(projectData);
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Portfolio</h1>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
