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
import axios from "axios";

const Register = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showPassC, setShowPassC] = useState(true);
  const { registerUser, setComponentRender, componentRender } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const imgFile = e.target.imgUrl.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassError("Password & Confirm Password are not same!!!");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setPassError("Password must be at least 6 characters long!!!");
      setLoading(false);
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("There have at least one uppercase!");
      setLoading(false);
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("There have at least one lowercase!");
      setLoading(false);
      return;
    }
    setPassError("");

    const formData = new FormData();
    formData.append("image", imgFile);

    try {
      const res = await axios.post(image_hosting_api, formData);
      if (res.data.success) {
        // console.log(res);
        const imgUrl = res.data.data.url;

        // Register user with Firebase Auth
        await registerUser(email, password);
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imgUrl,
        });

        let temp = componentRender;
        setComponentRender(!temp);
        e.target.reset();
        setLoading(false);

        toast.success("Successfully Registered your account!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      }
    } catch (error) {
      const errorMessage = error.message;
      setLoading(false);
      toast.error(errorMessage, {
        position: "bottom-right",
      });
    }
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
        <div className="max-w-xl w-full mx-auto md:border-2 md:py-16 md:px-24 rounded-lg my-10">
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
                type={showPass ? "password" : "text"}
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <FaRegEye
                className={
                  showPass
                    ? "absolute right-2 top-[.8rem] hover:cursor-pointer select-none text-base-content bg-base-100"
                    : "hidden"
                }
                onClick={() => setShowPass(!showPass)}
              />
              <FaRegEyeSlash
                className={
                  showPass
                    ? "hidden"
                    : "absolute right-2 top-[.8rem] hover:cursor-pointer select-none text-base-content bg-base-100"
                }
                onClick={() => setShowPass(!showPass)}
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
                type={showPassC ? "password" : "text"}
                name="confirmPassword"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <FaRegEye
                className={
                  showPassC
                    ? "absolute right-2 top-[.8rem] hover:cursor-pointer select-none text-base-content bg-base-100"
                    : "hidden"
                }
                onClick={() => setShowPassC(!showPassC)}
              />
              <FaRegEyeSlash
                className={
                  showPassC
                    ? "hidden"
                    : "absolute right-2 top-[.8rem] hover:cursor-pointer select-none text-base-content bg-base-100"
                }
                onClick={() => setShowPassC(!showPassC)}
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>

              {passError ? (
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-red-500 dark:text-red-400"
                >
                  {passError}
                </p>
              ) : (
                <p id="helper-text-explanation" className="hidden">
                  We’ll never share your details. Read our .
                </p>
              )}
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
            {!loading ? (
              <input
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Register"
              />
            ) : (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {" "}
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </button>
            )}

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
