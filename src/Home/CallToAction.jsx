import React, { useContext } from "react";
import image from "/Banner/calltoaction.jpg";
import { Parallax, Background } from "react-parallax";
import { AuthContext } from "@/AuthProvider";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 md:mb-6 lg:mb-8 font-bold text-center">
        Join the PetConnect Family
      </h2>
      <p className="w-[95%] md:w-[80%] lg:w-[65%] mx-auto text-center">
        At PetConnect, we're more than just a pet adoption service; we're a
        community of pet lovers dedicated to making a difference.
        <br /> Whether you're looking to add a new furry friend to your family
        or you're already a valued member of our community, we make it easy for
        you to find and adopt pets in need of loving homes. Sign up or log in to
        start your adoption journey today and experience the joy of giving a pet
        a forever home.
      </p>
      <div className="h-[80vh] my-6 md:my-10 lg:my-14">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={image}
          bgImageAlt="the dog"
          strength={-200}
          className="h-[80vh] object-cover"
        >
          <div className="h-[100vh] w-full flex items-center justify-center flex-col bg-black z-50 dark:bg-opacity-45 bg-opacity-35 text-slate-50 dark:text-slate-300">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-center">
              Adopot A Pet
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Find a new furry Friend
            </h4>
            {user ? (
              <div>
                <p className="max-w-[800px] text-center mx-6 lg:mx-auto">
                  Thank you for being a valued member of our community! Your
                  support helps us find loving homes for pets in need. Explore
                  our diverse range of pets eagerly waiting for a loving family.
                  Each click brings you closer to your new furry friend. Adopt
                  today and make a significant difference in a pet's life,
                  offering them the love and care they deserve.
                </p>
                <div className="text-center my-6">
                  <Link
                    to="/petListing"
                    className="bg-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800 hover:bg-green-600 active:bg-green-700 px-6 py-2 rounded-full ease-in-out duration-300"
                  >
                    Adopt A Pet
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <p className="max-w-[800px] text-center mx-6 lg:mx-auto">
                  Join our community to discover the perfect pet companion for
                  you. By signing up or logging in, you gain access to a variety
                  of pets looking for their forever homes. Take the first step
                  towards finding your future furry friend. Sign up now,
                  explore, and make a positive impact by giving a pet the loving
                  home they deserve.
                </p>
                <div className="text-center my-6">
                  <Link
                    to="/login"
                    className="bg-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800 hover:bg-green-600 active:bg-green-700 px-6 py-2 rounded-full ease-in-out duration-300"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* <div style={{ height: "200px" }} /> */}
        </Parallax>
      </div>
    </div>
  );
};

export default CallToAction;
