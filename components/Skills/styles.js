import styled from "styled-components";
import { ContainerTemplate } from "../../styles/GlobalStyles";
export const Container = styled.div`
  padding-left: 13vw;
  padding-right: 13vw;
  min-height: 100vh;
  h1 {
    color: #fff;
    position: relative;
    margin-bottom: 100px;
    &:after {
      content: "";
      background: #fff;
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 3px;
      width: 100%;
      border-radius: 100px;
    }
  }

  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: auto;
    gap: 2rem;
  }
`;
