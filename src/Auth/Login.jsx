import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaGithub } from "react-icons/fa";
import photo from "../../public/cat.png";
import google from "../../public/google.png";
import github from "../../public/github.svg";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [wrongCaptcha, setWrongCaptcha] = useState(false);
  const [disable, setDisable] = useState(true);
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [loading, setLoading] = useState(false);
  const { logInUser, GoogleSignIn, githubSignIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setLoading(false);
      setPassError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setLoading(false);
      setPassError("There have at least one uppercase!");

      return;
    }
    if (!/[a-z]/.test(password)) {
      setLoading(false);
      setPassError("There have at least one lowercase!");
      return;
    }
    setPassError("");
    logInUser(email, password);
    setLoading(false);
  };

  const captchaSubmit = (e) => {
    const user_captcha_value = e.target.value;

    setWrongCaptcha(false);
    setDisable(true);
    if (user_captcha_value.length === 6) {
      if (validateCaptcha(user_captcha_value, false) == true) {
        setDisable(false);
      } else {
        setWrongCaptcha(true);
        setDisable(true);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:mx-10 gap-8 my-16">
        <div>
          <h2 className="font-bold text-3xl md:text-5xl mx-10">
            Every Pet Deserves a Loving Home
          </h2>
          <p className="my-6 md:my-8 lg:my-10 text-center mx-10">
            Your journey towards unconditional love and loyalty begins here. Log
            in to see the wonderful pets looking for someone just like you.
          </p>
          <img
            src={photo}
            alt=""
            className="h-[25vh] md:h-[50vh] lg:h-[auto] mx-auto"
          />
        </div>
        <div className="max-w-xl w-full mx-auto md:border-2 md:py-16 md:px-24 rounded-lg my-10">
          <h3 className="text-center mb-10 text-3xl md:text-4xl font-bold">
            Login Here
          </h3>

          <form className="mx-6" onSubmit={handleLogin}>
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
              <p
                id="helper-text-explanation"
                className={
                  passError ? "text-red-500 text-xs ml-1 mt-2" : "hidden"
                }
              >
                {passError}
              </p>
            </div>
            <div className="border-2 py-2 px-2 rounded-lg">
              {" "}
              <LoadCanvasTemplate />
            </div>

            <div className="relative z-0 w-full my-5 group">
              <label
                htmlFor="floating_captha"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Captcha
              </label>
              <input
                type="text"
                id="floating_captha"
                name="captcha"
                onChange={captchaSubmit}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                placeholder="Enter Captcha"
              ></input>
              <div className="label">
                {!wrongCaptcha ? (
                  ""
                ) : (
                  <span className="label-text-alt text-red-500">
                    Invalid Captcha
                  </span>
                )}
              </div>
            </div>

            {!loading ? (
              disable ? (
                <button
                  type="submit"
                  className="dark:text-slate-300 text-white bg bg-slate-300 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-500 dark:focus:ring-blue-800"
                  disabled
                >
                  Login
                </button>
              ) : (
                <input
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  value="Login"
                />
              )
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

            <div className="mt-2">
              New in this site?{" "}
              <NavLink
                to="/register"
                className="hover:underline text-blue-600 font-bold"
              >
                Register Now
              </NavLink>
            </div>
          </form>
          <div className="flex gap-4 items-center justify-center mt-4">
            <button onClick={GoogleSignIn}>
              <img
                src={google}
                className="h-10 active:h-8 active:w-8 w-10 hover:cursor-pointer active:ease-in-out duration-100"
              ></img>
            </button>

            <button onClick={githubSignIn}>
              <span className="text-4xl active:text-3xl hover:cursor-pointer active:ease-in-out duration-100">
                <FaGithub />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
