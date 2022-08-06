import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

function ProtectedRoutes() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoutes;
