import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Column,
  LoginOrRegister,
  Logo,
  FastRegister,
  LinkStyle,
  Main,
} from "./styles";

import Icon from "../../assets/alipay-circle.svg";
import { useAuth } from "../../context/auth";
export default function Card({ children }) {
  const { verifyNextRouteOnSetRouter} = useAuth();

  return (
      <Main>
        <Column>
        <Logo />
        <LoginOrRegister>
          <button type="button" onClick={() => verifyNextRouteOnSetRouter("login")}>
            Login
          </button>
          <button type="button" onClick={() => verifyNextRouteOnSetRouter("register")}>
            Register
          </button>
        </LoginOrRegister>
        {children}
        <Button>Entrar</Button>
        <FastRegister>
          <p>Cadastro rápido:</p>
          <Link to="/Register" style={LinkStyle}>
            <img src={Icon} alt="icon" />
          </Link>
        </FastRegister>
      </Column>
      </Main>     
  );
}
