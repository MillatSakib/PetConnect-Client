import { useContext, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../AuthProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiLogin } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "./style.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // console.log(user.uid);

  return (
    <nav className=" bg-slate-100 border-gray-200 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between md:justify-start mx-auto p-4">
        <NavLink
          href="/fsdfasddf"
          className="flex items-center space-x-3 rtl:space-x-reverse mx-4"
        >
          <img
            src="https://raw.githubusercontent.com/MillatSakib/img-src/main/logo.png"
            className="h-8 lg:h-14"
            alt="PetConnect"
          />
          <span className="self-center text-2xl lg:text-3xl font-serif font-semibold whitespace-nowrap dark:text-white">
            PetConnect
          </span>
        </NavLink>
        <div className="flex flex-end gap-2 items-center justify-center md:hidden">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className=" select-none">
                  <Avatar>
                    <AvatarImage
                      src={user?.photoURL}
                      className="object-cover"
                    />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className="mx-6">{user?.displayName}</div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <NavLink to="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </NavLink>
                <Link to="/updateprofile">
                  <DropdownMenuItem>Update Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <div
                    className="w-full flex justify-between items-center font-bold"
                    onClick={logOut}
                  >
                    <button className="flex justify-between w-[full] items-center text-red-500 dark:text-red-400">
                      <span>Logout</span>
                    </button>
                    <span className="font-bold text-xl text-red-500 dark:text-red-400">
                      <CiLogin />
                    </span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            ""
          )}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:hidden md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            id="navMenu"
          >
            <li>
              <NavLink
                to={"/"}
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white dark:hover:bg-slate-500"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/petListing"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-slate-500"
              >
                Pet Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/donationCampaings"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-slate-500"
              >
                Donation Campaings
              </NavLink>
            </li>

            <li className="mt-2">
              <div className="flex items-center justify-end gap-4">
                <ModeToggle></ModeToggle>
                {user ? (
                  ""
                ) : (
                  <NavLink to="/login">
                    <Button variant={"outline"}>Login</Button>
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="justify-center hidden md:flex grow ">
          <div
            className={`w-full hidden md:block md:w-auto ${
              isOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700"
              id="navMenu"
            >
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 px-3 text-gray-900  rounded md:bg-transparent md:pb-1 dark:text-white  md:text-[1.1rem] font-bold"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/petListing"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:pb-1 dark:text-white md:text-[1.1rem] font-bold"
                >
                  Pet Listing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/donationCampaings"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:pb-1 dark:text-white md:text-[1.1rem] font-bold"
                >
                  Donation Campaings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-end gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className=" select-none">
                  <Avatar>
                    <AvatarImage
                      src={user?.photoURL}
                      className="object-cover"
                    />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className="mx-6">{user?.displayName}</div>
                </DropdownMenuLabel>
                <NavLink to="/dashboard">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </NavLink>
                <Link to="/updateprofile">
                  <DropdownMenuItem>Update Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>
                  <div
                    className="w-full flex justify-between items-center font-bold"
                    onClick={logOut}
                  >
                    <button className="flex justify-between w-[full] items-center text-red-500 dark:text-red-400">
                      <span>Logout</span>
                    </button>
                    <span className="font-bold text-xl text-red-500 dark:text-red-500">
                      <CiLogin />
                    </span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            ""
          )}

          <ModeToggle></ModeToggle>
          {user ? (
            ""
          ) : (
            <NavLink to="/login">
              <Button variant={"outline"}>Login</Button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
