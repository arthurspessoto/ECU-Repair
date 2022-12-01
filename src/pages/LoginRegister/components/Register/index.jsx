import React, { useState } from "react";
import { checkPassword, validUserName } from "../../../../validations";
import { WriteText, Button, Container } from "./styles";

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleChange(e) {
    setUserInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkPassword(userInfo.email, userInfo.repeatPassword);
    validUserName(userInfo.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <WriteText
          type="text"
          placeholder="Nome e Sobrenome"
          // value={userInfo.name}
          onChange={handleChange}
        />
        <WriteText
          type="email"
          placeholder="Email"
          // value={userInfo.email}
          onChange={handleChange}
        />
        <WriteText
          type="password"
          placeholder="Senha"
          // value={userInfo.password}
          onChange={handleChange}
        />
        <WriteText
          type="password"
          placeholder="Repetir senha"
          // value={userInfo.repeatPassword}
          onChange={handleChange}
          style={{ marginBottom: "1rem" }}
        />
        <Button>Entrar</Button>
      </Container>
    </form>
  );
}
