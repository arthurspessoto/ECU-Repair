import React from "react";
import { WriteText} from "./styles";

export default function Register() {
  return (
    <>
      <WriteText type="text" placeholder="Nome" />
      <WriteText type="email" placeholder="Email" />
      <WriteText type="password" placeholder="Senha" />
      <WriteText type="password" placeholder="Repetir senha" style={{marginBottom: '1rem'}} />
    </>
  );
}
