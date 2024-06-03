//for this user can't access the admin panel

import error from "../../public/errosr.png";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import UserDashBoard from "../DashBord/UserDashBoard";
import AdminDasahBord from "@/DashBord/AdminDashBoard";
import ErrorPage from "@/ErrorPage/ErrorPage";

const AdminProtection = ({ children }) => {
  const location = useLocation();
  const { user, loading, setRouteState } = useContext(AuthContext);
  setRouteState(location.pathname);
  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto text-success"></span>
    );
  }
  if (user?.role === "admin") {
    return <AdminDasahBord></AdminDasahBord>;
  } else if (user?.role === "user") {
    return <UserDashBoard></UserDashBoard>;
  } else {
    return <ErrorPage></ErrorPage>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminProtection;
