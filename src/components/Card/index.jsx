import React from "react";
import { Link } from "react-router-dom";
import {
  Column,
  LoginOrRegister,
  Logo,
  FastRegister,
  LinkStyle,
  Main,
} from "./styles";

import Icon from "../../assets/alipay-circle.svg";
import { useAuth } from "../../context/authenticate";
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
