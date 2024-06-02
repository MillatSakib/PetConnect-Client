import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
