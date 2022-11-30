import React from "react";
import Card from "../../components/Card";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuth } from "../../context/authenticateRoute";
export default function Auth() {
  const { route } = useAuth();
  return <Card>{route == "login" ? <Login /> : <Register />}</Card>;
}
