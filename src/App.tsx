import { useEffect } from "react";
import AppRoutes from "./app/router/AppRoutes";
import useAuth from "./shared/store/useAuth";

function App() {

  const { getToken } = useAuth();

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AppRoutes />
  )
}

export default App

