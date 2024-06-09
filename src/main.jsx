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
import DonationCamapigns from "./DonationCampaigns/DonationCamapigns";
import PetListing from "./PetListing/PetListing";
import AdminProtection from "./RouteProtection/AdminProtection";
import Home from "./Home/Home";
import PetDetails from "./PetDetails/PetDetails";
import axios from "axios";
import DonataionDetails from "./DonationDetails/DonataionDetails";
axios.defaults.withCredentials = true;

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
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <AdminProtection></AdminProtection>,
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
      {
        path: "/donationCampaings",
        element: <DonationCamapigns></DonationCamapigns>,
      },

      {
        path: "/petListing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/petDetails/:id",
        loader: ({ params }) =>
          axios.get(
            `https://petconnect-kappa.vercel.app/petDetails/${params.id}`
          ),
        element: <PetDetails></PetDetails>,
      },
      {
        path: "/donationDetails/:id",
        loader: ({ params }) =>
          axios.get(
            `https://petconnect-kappa.vercel.app/donationDetails/${params.id}`
          ),
        element: <DonataionDetails></DonataionDetails>,
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
