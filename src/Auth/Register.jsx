import { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import photo from "../../public/loginBanner.png";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showPassC, setShowPassC] = useState(true);
  const { registerUser, setComponentRender, componentRender } =
    useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassError("Password & Confirm Password are not same!!!");
      return;
    }
    if (password.length < 6) {
      setPassError("Password must be at least 6 characters long!!!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("There have at least one uppercase!");

      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("There have at least one lowercase!");
      return;
    }
    setPassError("");
    registerUser(email, password)
      .then(() => {
        // Signed up
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imgUrl,
        })
          .then(() => {
            let temp = componentRender;
            setComponentRender(!temp);
            toast.success("Successfully Regitered you account!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage, {
              position: "bottom-right",
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - Register</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-10 gap-8 my-16">
        <div>
          <h2 className="font-bold text-3xl md:text-5xl mx-10">
            Welcome Back!{" "}
          </h2>
          <p className="my-6 md:my-8 lg:my-10 text-center mx-10">
            Your next best friend is just a few clicks away. Log in to explore
            the wonderful pets waiting for a loving home.
          </p>
          <img
            src={photo}
            alt=""
            className="h-[25vh] md:h-[50vh] lg:h-[auto] mx-auto"
          />
        </div>
        <div className="max-w-lg w-full mx-auto md:border-2 md:py-16 md:px-24 rounded-lg my-10">
          <h3 className="text-center mb-10 text-3xl md:text-4xl font-bold">
            Register Now
          </h3>
          <form className="mx-6" onSubmit={handleRegister}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="confirmPassword"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Upload Profile Photo
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                name="imgUrl"
                type="file"
                accept=".jpg, .jpeg, .png"
                required
              />
              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                Please select you profile photo.
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                defaultChecked
                id="checkbox-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <label
                htmlFor="checkbox-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree to the{" "}
                <Link
                  to="/terms&condition"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </Link>
                .
              </label>
            </div>
            <input
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              value="Register"
            />

            <p className=" py-4 text-green-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="hover:underline text-blue-600 font-bold"
              >
                Login Now
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Register;
