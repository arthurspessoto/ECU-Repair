import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
