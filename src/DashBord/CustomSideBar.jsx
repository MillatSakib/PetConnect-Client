"use client";

import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { VscDiffAdded } from "react-icons/vsc";
import { GrUploadOption } from "react-icons/gr";
import { BiSolidDonateBlood } from "react-icons/bi";
import { LiaDonateSolid } from "react-icons/lia";
import { FaDonate } from "react-icons/fa";
import { AuthContext } from "@/AuthProvider";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";

export default function CustomSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [access, setAccess] = useState({});
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("https://petconnect-kappa.vercel.app/verifyAdmin", {
        withCredentials: true,
      })
      .then((data) => setAccess(data.data))
      .catch((error) => setAccess({ message: "forbidden access" }));
  }, []);
  return (
    <div className="flex min-h-[100vh] h-[120vh]">
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`fixed top-0 left-0 z-40 h-full w-64 transition-transform transform bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:static`}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/">
              <div className="flex items-center justify-center gap-1">
                <img src="https://raw.githubusercontent.com/MillatSakib/img-src/main/logo.png" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                  PetConnect
                </span>
              </div>
            </Sidebar.Item>
            <Link to="/">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <IoMdHome />
                  <span>Home</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/addPet">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <IoAdd />
                  <span>Add Pet</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/myDonation">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <FaDonate />
                  <span>My Donation</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/myAddedPets">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <VscDiffAdded />
                  <span> My Added Pets</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/adoptionRequest">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <GrUploadOption />
                  <span> Adoption Requests</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/donationCampain">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <LiaDonateSolid />
                  <span>My Donation Campains</span>
                </div>
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard/createDonationCampain">
              <Sidebar.Item>
                <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                  <BiSolidDonateBlood />
                  <span> Create Donation Campain</span>
                </div>
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
          {access?.message === "have access" ? (
            <>
              <div className="mt-4 md:mt-6 font-semibold text-xl text-right">
                Admin Action
              </div>
              <Sidebar.ItemGroup>
                <Link to="/dashboard/allUsers">
                  <Sidebar.Item>
                    <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                      <FaUserAlt />
                      <span> All Users</span>
                    </div>
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard/allPet">
                  <Sidebar.Item>
                    <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                      <MdOutlinePets />
                      <span> All Pets</span>
                    </div>
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard/allDonaiton">
                  <Sidebar.Item>
                    <div className="flex items-center text-[1.1rem] gap-1 justify-end">
                      <BiDonateBlood />
                      <span>All Donation</span>
                    </div>
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </>
          ) : (
            ""
          )}
        </Sidebar.Items>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between dark:bg-slate-800 bg-slate-100 p-3 gap-2">
          <h1 className="text-2xl font-bold ml-4">Dashboard</h1>
          <div className="flex justify-center items-center gap-2">
            <button
              className="p-2 text-gray-500 bg-gray-200 rounded-md lg:hidden z-50"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <ModeToggle></ModeToggle>
          </div>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}
