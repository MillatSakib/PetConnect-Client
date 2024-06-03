//for this anonymous user can't access the users routes

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const UserProtection = ({ children }) => {
  const location = useLocation();
  const { user, loading, setRouteState } = useContext(AuthContext);
  setRouteState(location.pathname);
  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto text-success"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default UserProtection;
