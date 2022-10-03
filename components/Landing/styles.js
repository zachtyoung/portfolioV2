import styled from "styled-components";
import { ContainerTemplate } from "../../styles/GlobalStyles";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 13vw;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Left = styled.div`
  max-width: 625px;
  h1 {
    color: white;
    font-size: 60px;
    font-family: "Proxima Nova", sans-serif;
    margin-bottom: 50px;
    line-height: 73px;
    font-weight: 800;
  }
  h2 {
    color: white;
    font-size: 18px;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    margin-bottom: 30px;
    line-height: 30px;
    max-width: 564px;
  }
  button {
    font-family: "Proxima Nova", sans-serif;
    margin-top: 50px;
    padding: 1rem 2rem;
    border: none;
    background: transparent linear-gradient(243deg, #8e2de2 0%, #4a00e0 100%) 0%
      0% no-repeat padding-box;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 0.1s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`;
export const Right = styled.div`
  img {
    width: 100%;
    display: block;
    margin-right: -100px;
  }
  @media (max-width: 768px) {
    grid-row: 1;
    margin-bottom: 50px;
  }
`;
