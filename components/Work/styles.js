import styled from "styled-components";

export const Container = styled.div`
  padding-left: 13vw;
  padding-right: 13vw;
  min-height: 100vh;
  h1 {
    color: #fff;
    position: relative;
    margin-bottom: 30px;
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
`;
