import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Layout from "./Layout/Layout";
import AuthProvider from "./AuthProvider";
import Terms from "./Terms&Condition/Terms";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./ErrorPage/ErrorPage";
import Policy from "./PrivacyPolicy/Policy";
import LoginProtection from "./RouteProtection/LoginProtection";
import UserProtection from "./RouteProtection/UserProtection";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/updateprofile",
        element: (
          <UserProtection>
            <UpdateProfile></UpdateProfile>
          </UserProtection>
        ),
      },
      {
        path: "/login",
        element: (
          <LoginProtection>
            <Login></Login>
          </LoginProtection>
        ),
      },
      {
        path: "/register",
        element: (
          <LoginProtection>
            <Register></Register>
          </LoginProtection>
        ),
      },
      {
        path: "/terms&condition",
        element: <Terms></Terms>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </React.StrictMode>
  </ThemeProvider>
);
