import React from "react";
import { Container, Border, Abbreviation, Description } from "./styles";
const SkillCard = ({ skill }) => {
  return (
    <Container>
      <Border>
        <Abbreviation>{skill.abbreviation}</Abbreviation>
      </Border>
      <Description>{skill.description}</Description>
    </Container>
  );
};

export default SkillCard;
