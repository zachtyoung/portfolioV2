import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import img from "../../../assets/images/code.png";
const WorkCard = ({ project }) => {
  return (
    <Container>
      <h3>{project.project_name}</h3>
      <Image src={project.project_image_path} width={888} height={500} />
    </Container>
  );
};

export default WorkCard;
