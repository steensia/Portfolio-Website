import React from "react";
import { ProjectData } from "../../Data/Projects";
import ProjectCard from "./Project-Card";
import "./Projects.css";
import Separator from "../../Common/Separator/Separator";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
