import { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    updateUserProfile,
    user,
    updateProfileLoading,
    setUpdateProfileLoading,
  } = useContext(AuthContext);
  const handleUpdate = async (e) => {
    setUpdateProfileLoading(true);
    e.preventDefault();
    const imgFile = e.target.imgUrl.files[0];
    const name = e.target.name.value;
    const formData = new FormData();
    formData.append("image", imgFile);
    if (imgFile) {
      try {
        const res = await axios.post(image_hosting_api, formData);
        if (res?.data?.success) {
          const imgUrl = res.data.data.url;
          updateUserProfile(name, imgUrl);
        }
      } catch (error) {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "bottom-right",
        });
      }
    } else {
      updateUserProfile(name, user?.photoURL);
    }
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Update Profile</title>
      </Helmet>
      <div className="max-w-[95%] mx-auto border-2 border-blue-400 py-8 px-10 rounded-xl my-28">
        <div>Hey,</div>
        <div>For update your profile please submit this form!</div>
        <div className="font-semibold text-blue-500">
          Note: For Get updated profile please refresh the page after submit the
          form
        </div>
        <form className="max-w-lg mx-auto" onSubmit={handleUpdate}>
          <div className="flex items-center flex-col md:flex-row justify-center gap-10 mt-6 lg:mt-10">
            <div className="flex justify-center items-center flex-col">
              <div className="font-bold text-green-500 dark:text-green-500">
                Profile Picture
              </div>
              <img
                src={user?.photoURL}
                className="rounded-full h-28 w-28 ring-4 ring-green-500 my-2 overflow-hidden object-cover"
              ></img>
            </div>
            <div>
              <h4 className="my-2 font-bold">
                We are support only JPEG, JPG and PNG pictures.
              </h4>

              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Choose your Prfile Photo.
              </label>
              <input
                name="imgUrl"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>
          </div>
          <div className="mt-4 lg:mt-6">
            <h3 className="font-semibold text-xl">Other Information</h3>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                id="disabled-input"
                aria-label="disabled input"
                className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                defaultValue={user.displayName}
                required
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            {!updateProfileLoading ? (
              <input
                type="submit"
                value={"Update Profile"}
                className="bg-green-500 text-white dark:bg-green-400 px-10 py-2 rounded-full hover:bg-green-600 active:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-600"
              ></input>
            ) : (
              <button
                type="button"
                className="bg-green-500 text-white dark:bg-green-400 px-10 py-2 rounded-full hover:bg-green-600 active:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-600"
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
            {/* <input
              type="submit"
              value={"Update Profile"}
              className="bg-green-500 text-white dark:bg-green-400 px-10 py-2 rounded-full hover:bg-green-600 active:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-600"
            ></input> */}
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
