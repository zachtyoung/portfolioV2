import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./styles";
const Master = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Master;
