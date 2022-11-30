import styled from "styled-components";
import LogoECU from "../../assets/ecurepair02.svg";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: #1E1E1E;
  min-height: 100vh;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  color: #fff;
  background-color: #fff;
  border: 1px solid white;
  border-radius: 10px;
`;

export const Logo = styled.div`
  background-image: url(${LogoECU});
  height: 10rem;
  width: 22rem;
  background-repeat: no-repeat;
  justify-content: center;
  margin-top: 1rem;
`;

export const LoginOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  

  button {
    background-color: transparent;
    font-size: 1rem;
    width: 10rem;
    height: 2rem;
    color: #1e1e1e;
    font-weight: 400;
    padding-bottom: 0.25rem;
    cursor: pointer;
    border: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid #2596fe;
      color: #2596fe;
    }

    &:focus{
      border-bottom: 3px solid #2596fe;
      color: #2596fe;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: 2.5rem;
  width: 7rem;
  background: #1890ff;
  border: 1px solid #1890ff;
  /* margin-top: 1rem; */
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  color: #fff;
  font-size: 1rem;
`;

export const FastRegister = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 3rem;

  p{
    color: rgba(0, 0, 0, 0.85);
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-align: center;
    padding-right: 0.60rem;
  }
`;

export const LinkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  padding: 5
}
