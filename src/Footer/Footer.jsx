import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/MillatSakib/img-src/main/logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PetConnect
              </span>
            </NavLink>
            <div className="py-4">
              <div className="my-2">
                <div className="text-xl font-semibold">Contact Us:</div>

                <div className="text-gray-500 dark:text-gray-400">
                  Email: info@petconnect.com | Phone: +1 (123) 456-7890
                </div>
              </div>
              <div className="my-2">
                <div className="text-xl font-semibold">Find Us:</div>

                <div className="text-gray-500 dark:text-gray-400">
                  456 Oak Street, Springfield, IL, 62701, USA
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/petListing" className="hover:underline">
                    Pet Listing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/donationCampaings" className="hover:underline">
                    Donation Campaigns
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="https://x.com/petconnectrescu"
                    className="hover:underline"
                  >
                    Twitter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="https://www.instagram.com/rescuepetconnect/"
                    className="hover:underline"
                  >
                    Instagram
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/policy" className="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms&condition" className="hover:underline">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <NavLink to="/" className="hover:underline">
              PetConnect™
            </NavLink>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
