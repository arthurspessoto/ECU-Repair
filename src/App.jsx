import React from "react";
import AppRoutes from "./routes/index.routes";
import { AuthProvider } from "./context/authenticateRoute";
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
