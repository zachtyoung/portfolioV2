import React from "react";
import { Container, Logo, Navigation, CTA } from "./styles";
const Header = () => {
  return (
    <Container>
      <Logo>Zach Young</Logo>
      <Navigation>
        <li title="Home">Home</li>
        <li title="About">About</li>
        <li title="Work">Work</li>
      </Navigation>
      <CTA>Let's Talk</CTA>
    </Container>
  );
};

export default Header;
