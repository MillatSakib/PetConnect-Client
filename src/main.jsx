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
import Home from "./Home/Home";
import PetDetails from "./PetDetails/PetDetails";
import axios from "axios";
import DonataionDetails from "./DonationDetails/DonataionDetails";
import CustomSideBar from "./DashBord/CustomSideBar";
import AddPet from "./DashBord/User/AddPet";
import MyDonation from "./DashBord/User/MyDonation";
import MyPets from "./DashBord/User/MyPets";
import AdoptionRequest from "./DashBord/User/AdoptionRequest";
import DonationCampain from "./DashBord/User/DonationCampain";
import AddDonationCampain from "./DashBord/User/AddDonationCampain";
import AllPet from "./DashBord/Admin/AllPet";
import AllUser from "./DashBord/Admin/AllUser";
import AllDonation from "./DashBord/Admin/AllDonation";
import UpdateInfo from "./DashBord/User/UpdateInfo";
import UpdateInfoAdmin from "./DashBord/Admin/UpdateInfo";
import EditCampain from "./DashBord/User/EditCampain";
import Logger from "./DashBord/Admin/Logger";
axios.defaults.withCredentials = true;
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

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
  {
    path: "/dashboard",
    element: (
      <UserProtection>
        <CustomSideBar></CustomSideBar>
      </UserProtection>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AddPet></AddPet>,
      },
      {
        path: "/dashboard/addPet",
        element: <AddPet></AddPet>,
      },
      {
        path: "/dashboard/myDonation",
        loader: () =>
          axios.get(`https://petconnect-kappa.vercel.app/myDonation`),
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/dashboard/myAddedPets",
        element: <MyPets></MyPets>,
      },
      {
        path: "/dashboard/createDonationCampain",
        element: <AddDonationCampain></AddDonationCampain>,
      },
      {
        path: "/dashboard/donationCampain",
        loader: () =>
          axios.get(`https://petconnect-kappa.vercel.app/myAchivedDonation`),
        element: <DonationCampain></DonationCampain>,
      },
      {
        path: "/dashboard/adoptionRequest",
        loader: () =>
          axios.get(`https://petconnect-kappa.vercel.app/allAdoptionReq`),
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: "/dashboard/allPet",
        loader: () => axios.get("https://petconnect-kappa.vercel.app/allPets"),
        element: <AllPet></AllPet>,
      },
      {
        path: "/dashboard/allUsers",
        loader: () => axios.get("https://petconnect-kappa.vercel.app/allUsers"),
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/allDonaiton",
        loader: () =>
          axios.get("https://petconnect-kappa.vercel.app/donationCampaigns"),
        element: <AllDonation></AllDonation>,
      },
      {
        path: "/dashboard/update/:id",
        loader: ({ params }) =>
          axios.get(
            `https://petconnect-kappa.vercel.app/petDetails/${params.id}`
          ),
        element: <UpdateInfo></UpdateInfo>,
      },
      {
        path: "/dashboard/myCampainEdit/:id",
        loader: ({ params }) =>
          axios.get(
            `https://petconnect-kappa.vercel.app/donationDetails/${params.id}`
          ),
        element: <EditCampain></EditCampain>,
      },
      {
        path: "/dashboard/updatePetAdmin/:id",
        loader: ({ params }) =>
          axios.get(
            `https://petconnect-kappa.vercel.app/petDetails/${params.id}`
          ),
        element: <UpdateInfoAdmin></UpdateInfoAdmin>,
      },
      {
        path: "/dashboard/logger",
        element: <Logger></Logger>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </React.StrictMode>
  </ThemeProvider>
);
