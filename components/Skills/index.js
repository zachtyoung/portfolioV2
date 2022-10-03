import React from "react";
import { Container, Grid } from "./styles";
import SkillCard from "./SkillCard";
import skills from "../../data/skills.json";
const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <h2>Front End</h2>
      <Grid>
        {skills.frontend.map((skill, index) => {
          return <SkillCard skill={skill} key={skill.abbreviation} />;
        })}
      </Grid>
      <h2>Back End</h2>
      <Grid>
        {skills.backend.map((skill, index) => {
          return <SkillCard skill={skill} key={skill.abbreviation} />;
        })}
      </Grid>
      <h2>Tooling</h2>
      <Grid>
        {skills.tooling.map((skill, index) => {
          return <SkillCard skill={skill} key={skill.abbreviation} />;
        })}
      </Grid>
    </Container>
  );
};

export default Skills;
