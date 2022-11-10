import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner1 from "../Components/Spinners/Spinner1";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner1 />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
