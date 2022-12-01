import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  img {
    position: absolute;
    margin-left: 0.75rem;
    margin-top: 0.7rem;
  }
`;

export const WriteText = styled.input`
  display: flex;
  align-items: center;
  padding: 0.65rem 4rem;
  margin-bottom: 1.5rem;
  width: 22rem;

  border: 1px solid #d9d9d9;
  border-radius: 2px;

  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  /* opacity: 0.7; */
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.75rem;
`;

export const RememberUser = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 4px;

  p {
    color: rgba(0, 0, 0, 0.85);
    font-size: 0.875rem;
    font-weight: 400;
    font-style: normal;
  }
`;

export const LostPassword = styled.button`
  display: flex;
  border: none;
  color: #1890ff;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
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