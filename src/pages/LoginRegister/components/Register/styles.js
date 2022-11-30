import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  min-height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const WriteText = styled.input`
  display: flex;
  align-items: center;
  padding: 0.65rem 4rem;
  margin-top: 1rem;
  width: 22rem;

  border: 1px solid #d9d9d9;
  border-radius: 2px;

  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  /* opacity: 0.7; */

`;
