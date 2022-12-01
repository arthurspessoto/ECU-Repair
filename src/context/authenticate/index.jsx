import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [route, setRoute] = useState("login");

  function verifyNextRouteOnSetRouter(routeName) {
    if (routeName !== route) {
      setRoute(routeName);
    }
  }

  return (
    <AuthContext.Provider value={{ verifyNextRouteOnSetRouter, route }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser utilizado dentro de um AuthProvider");
  }

  return context;
}



export { AuthProvider, useAuth };
