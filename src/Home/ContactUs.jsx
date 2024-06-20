import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
      <h2 className="text-3xl mb-6 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl text-center dark:text-orange-400 text-orange-500 mt-4 font-bold">
        Contact Us
      </h2>
      <div className="flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[65%] mx-auto max-w-[1000px] flex my-4 gap-4 md:gap-6 lg:gap-8 justify-center items center">
        <div className="relative my-2 border-2 text-center border-orange-500 dark:border-orange400 px-10 w-full rounded-lg border-opacity-35 py-10 lg:py-16 cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
          <div className="absolute text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400 -top-4 left-[45%] bg-white px-4 dark:bg-[#333D48] z-50">
            <FaEnvelope />
          </div>
          <div className="font-bold text-xl lg:text-2xl my-2 text-orange-500 dark:text-orange-400">
            Send us a Message
          </div>
          <div className="font-bold text-[1.2rem] text-slate-600 dark:text-slate-200">
            info@petconnect.com{" "}
          </div>
        </div>
        <div className="relative my-2 border-2 text-center border-orange-500 dark:border-orange400 px-10 w-full rounded-lg border-opacity-35 py-10 lg:py-16 cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
          <div className="absolute text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400 -top-4 left-[45%] bg-white px-4 dark:bg-[#333D48] z-50">
            <FaLocationDot />
          </div>
          <div className="font-bold text-xl lg:text-2xl my-2 text-orange-500 dark:text-orange-400">
            Visit our Location
          </div>
          <div className="font-bold text-[1.2rem] text-slate-600 dark:text-slate-200">
            456 Oak Street, Springfield, IL, 62701, USA
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[65%] mx-auto max-w-[1000px] flex my-8 gap-4 md:gap-6 lg:gap-8 justify-center items center">
        <div className="relative my-2 border-2 text-center border-orange-500 dark:border-orange400 px-10 w-full rounded-lg border-opacity-35 py-10 lg:py-16 cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
          <div className="absolute text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400 -top-4 left-[45%] bg-white px-4 dark:bg-[#333D48] z-50">
            <FaPhoneAlt />
          </div>
          <div className="font-bold text-xl lg:text-2xl my-2 text-orange-500 dark:text-orange-400">
            Call us today
          </div>
          <div className="font-bold text-[1.2rem] text-slate-600 dark:text-slate-200">
            +1 (123) 456-7890
          </div>
        </div>
        <div className="relative my-2 border-2 text-center border-orange-500 dark:border-orange400 px-10 w-full rounded-lg border-opacity-35 py-10 lg:py-16 cursor-pointer hover:scale-[1.05] ease-in-out duration-300">
          <div className="absolute text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400 -top-4 left-[45%] bg-white px-4 dark:bg-[#333D48] z-50">
            <FaHeart />
          </div>
          <div className="font-bold text-xl lg:text-2xl my-2 text-orange-500 dark:text-orange-400">
            Follow us on Social Media
          </div>
          <div className="flex gap-4 justify-center dark:text-slate-50">
            <NavLink
              to="https://x.com/petconnectrescu"
              className="hover:underline font-bold text-[1.2rem] text-slate-600 dark:text-slate-200"
            >
              Twitter
            </NavLink>
            <NavLink
              href="https://www.instagram.com/rescuepetconnect/"
              className="hover:underline font-bold text-[1.2rem] text-slate-600 dark:text-slate-200"
            >
              Instagram
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
