import React from "react";
import { Container, Left, Right } from "./styles";
import Image from "next/image";
import code from "../../assets/code-mask@2x.png";
import mouse from "../../assets/mouse-alt.svg";
const Landing = () => {
  return (
    <Container>
      <Left>
        <h1>
          Full-Stack<br></br>Software Engineer
        </h1>
        <h2>
          Developer with 3 years experience architecting, building, and
          deploying projects with modern frameworks and scaleable tech stacks.
        </h2>
        <h2>
          I love problem solving, collaborating, and working on projects that
          impact every day people.
        </h2>
        <button>View Work</button>
      </Left>
      <Right>
        <Image src={code} style={{ marginRight: "-100px" }} />
      </Right>
      {/* <Image src={mouse} /> */}
    </Container>
  );
};

export default Landing;
