import { Link } from "react-router-dom";
import error from "../../public/errosr.png";
const ErrorPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${error})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    top: 0,
    left: 0,
  };
  return (
    <div
      className="bg-white py-6 sm:py-8 lg:py-12 flex justify-center items-center"
      style={backgroundImageStyle}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            {/* <img src={error} className="h-[50vh]"></img> */}
          </a>
          <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-2xl lg:text-3xl">
            Oops! That’s a 404
          </p>
          <h1 className="mb-2 text-center text-4xl font-bold text-red-500 md:text-5xl lg:text-7xl">
            Page not found
          </h1>

          <p className="mb-12 mt-4 font-semibold max-w-screen-md text-center text-gray-500 md:text-lg lg:text-2xl">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:text-gray-800 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
