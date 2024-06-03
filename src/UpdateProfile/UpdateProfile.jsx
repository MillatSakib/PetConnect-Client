import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { updateUserProfile, user } = useContext(AuthContext);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const imgFile = e.target.imgUrl.files[0];
    console.log(imgFile);
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
        {/* <div className="card my-8 shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={user.displayName}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                defaultValue={user.email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                name="imgUrl"
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                defaultValue={user.photoURL}
                required
              />
            </div>
            <div className="form-control mt-1">
              <input
                type="submit"
                className="btn btn-primary"
                value="Update"
              ></input>
            </div>
          </form>
        </div> */}
        <form className="max-w-lg mx-auto" onSubmit={handleUpdate}>
          <div className="flex items-center justify-center gap-10 mt-6 lg:mt-10">
            <div className="flex justify-center items-center flex-col">
              <div>Profile Picture</div>
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
            <input
              type="submit"
              value={"Update Profile"}
              className="bg-green-500 text-white dark:bg-green-400 px-10 py-2 rounded-full hover:bg-green-600 active:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-600"
            ></input>
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
