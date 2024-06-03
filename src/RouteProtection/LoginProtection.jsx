//For this after Login user can't access Login and register pager after login

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const LoginProtection = ({ children }) => {
  const { user, loading, routeState } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg text-success"></span>
    );
  }
  if (user) {
    return <Navigate to={routeState}></Navigate>;
  }
  return children;
};

export default LoginProtection;
