import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { adminContext } from "../context/Admin-Context";

function ProtectedRoutes() {
  const { isAuthenticated, admin } = useContext(adminContext);
  if (!isAuthenticated && admin == null)
    return <Navigate to={"/sign-in"} replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
