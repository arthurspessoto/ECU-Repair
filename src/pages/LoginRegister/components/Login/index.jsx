import React, { useState } from "react";
import {
  Box,
  FormWrapper,
  InputWrapper,
  LostPassword,
  Main,
  RememberUser,
  WriteText,
  Button,
} from "./styles";
import LogoEmail from "../../../../assets/union.svg";
import LogoPassword from "../../../../assets/password.svg";

export default function Login() {
  return (
    <Main>
      <form action="">
        <FormWrapper>
          <Box>
            <img src={LogoEmail} width={12} height={16} />
            <WriteText type="email" placeholder="Email" />
          </Box>
          <Box>
            <WriteText type="password" placeholder="Senha" />
            <img src={LogoPassword} alt="senha" width={16} height={14} />
          </Box>
          <InputWrapper>
            <RememberUser>
              <input type="checkbox" placeholder="rememberUser" />
              <p>Lembrar meu usuário</p>
            </RememberUser>
            <LostPassword>Perdi a senha</LostPassword>
          </InputWrapper>
        </FormWrapper>
        <Button>Entrar</Button>
      </form>
    </Main>
  );
}
