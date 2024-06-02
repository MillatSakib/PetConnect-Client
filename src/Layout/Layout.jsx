import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Footer from "@/Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
