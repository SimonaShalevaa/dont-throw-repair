import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../contexts/auth-context";

export default function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}