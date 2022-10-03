import React from "react";
import { Container } from "./styles";
const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()} Zach Young</Container>;
};

export default Footer;
