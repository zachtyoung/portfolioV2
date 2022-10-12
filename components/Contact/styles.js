import styled from "styled-components";

export const Container = styled.div`
  padding-left: 13vw;
  padding-right: 13vw;
  min-height: 100vh;
  font-family: proxima-nova, sans-serif;
  h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 30px;
  }
  form {
    max-width: 920px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, max-content);
    row-gap: 44px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    input {
      display: block;
      grid-column: 1;
      max-width: 400px;
      height: 58px;
      border-radius: 100px;
      text-indent: 2rem;
      border: 3px solid #8e2de2;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      font-size: 1rem;
    }
    textarea {
      grid-row: 1/4;
      grid-column: 2;
      border-radius: 29px;
      padding: 2rem;
      border: 3px solid #8e2de2;
      font-family: proxima-nova, sans-serif;
      font-weight: 600;
      font-size: 1rem;
      resize: none;
      @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 4;
        min-height: 350px;
      }
    }
    margin-top: 180px;
    margin-bottom: 120px;
    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  }
  button {
    cursor: pointer;
    height: 58px;
    width: 164px;
    border-radius: 100px;
    border: none;
    background: transparent linear-gradient(280deg, #8e2de2 0%, #4a00e0 100%) 0%
      0% no-repeat padding-box;
    color: white;
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    &:hover {
      transform: scale(1.05);
      transition: all 0.1s ease-in-out;
    }
  }
`;
