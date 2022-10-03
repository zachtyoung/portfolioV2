import React from "react";
import { Container } from "./styles";
import projects from "../../data/projects.json";
import WorkCard from "./WorkCard";
const Work = () => {
  return (
    <Container>
      <h1>Work</h1>
      {projects.completed.map((project) => (
        <WorkCard key={project.project_name} project={project} />
      ))}
    </Container>
  );
};

export default Work;
