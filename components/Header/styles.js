import styled from "styled-components";
import { ContainerTemplate } from "../../styles/GlobalStyles";
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 13vw;
`;

export const Logo = styled.div`
  color: white;
  font-weight: 700;
  font-size: 22px;
`;

export const Navigation = styled.ul`
  color: white;
  list-style: none;
  display: inline;
  margin: 0;
  li {
    &:nth-child(2) {
      margin: 0 3rem;
    }
    display: inline;
    font-weight: 200;
    cursor: pointer;
  }
`;

export const CTA = styled.button`
  color: white;
  border: none;
  background: transparent linear-gradient(243deg, #8e2de2 0%, #4a00e0 100%) 0%
    0% no-repeat padding-box;
  display: block;
  height: max-content;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.1s ease-in-out;
  }
`;
