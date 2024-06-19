import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Footer from "@/Footer/Footer.jsx";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
