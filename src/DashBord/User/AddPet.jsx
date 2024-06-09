import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Field, Form } from "formik";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddPet = () => {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "hare", label: "Hare" },
    { value: "fish", label: "Fish" },
    { value: "bird", label: "Bird" },
  ];

  return (
    <div className="w-[95%] md:w-[85%] lg:w-[65%] mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 text-orange-500 dark:text-orange-400">
        Add A Pet
      </h1>
      <Formik
        initialValues={{
          petName: "",
          petAge: 0,
          email: "",
          myfile: null,
        }}
        onSubmit={async (values) => {
          const inputData = {
            petName: values?.petName,
            petAge: values?.petAge,
            petLocation: values?.petLocation,
            shortDescription: values?.shortDescription,
            longDescription: value,
            petCategory: selectValue,
            time: Date.now(),
            adopted: false,
          };

          const formData = new FormData();
          formData.append("image", values.myfile);

          try {
            const res = await fetch(image_hosting_api, {
              method: "POST",
              body: formData,
            });

            if (!res.ok) {
              throw new Error("Image upload failed");
            }

            const data = await res.json();

            if (data.success) {
              const imgUrl = data.data.url;
              inputData.petImgURL = imgUrl;
              axios
                .post("https://petconnect-kappa.vercel.app/addPet", inputData, {
                  withCredentials: true,
                })
                .then((data) =>
                  toast.success(data.data, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                  })
                );
            } else {
              throw new Error(data.error.message);
            }
          } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage, {
              position: "bottom-right",
            });
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="flex my-6 justify-evenly">
              <div>
                <label htmlFor="petName">Pet Name</label>
                <br />
                <Field
                  id="petName"
                  name="petName"
                  placeholder="Tomi"
                  className="border-2 rounded-sm p-2 bg-transparent min-w-[300px]"
                  required
                />
              </div>
              <div>
                <label htmlFor="petAge">Pet Age</label>
                <br />
                <Field
                  type="number"
                  id="petAge"
                  name="petAge"
                  placeholder="Doe"
                  className="border-2 rounded-sm p-2 min-w-[300px] bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex justify-evenly my-6">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  className="border-2 rounded-sm p-2 min-w-[300px] bg-transparent cursor-not-allowed select-none"
                  type="email"
                  disabled
                  required
                />
              </div>
              <div>
                <label htmlFor="petCategory">Select Pet Category</label>
                <br />
                <Select
                  id="petCategory"
                  name="petCategory"
                  options={options}
                  onChange={(value) => setSelectValue(value.value)}
                  className="border-2 rounded-sm min-w-[300px] bg-transparent text-black"
                  required
                />
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div>
                <label htmlFor="petLocation">Pet Location</label>
                <br />
                <Field
                  id="petLocation"
                  name="petLocation"
                  placeholder="New York, USA"
                  className="border-2 rounded-sm p-2 min-w-[300px] bg-transparent"
                  type="text"
                  required
                />
              </div>
              <div className="mt-4">
                <Field
                  name="myfile"
                  render={({ field }) => (
                    <input
                      type="file"
                      className="border-2 rounded-sm pl-4 min-w-[300px]"
                      required
                      onChange={(event) => {
                        setFieldValue("myfile", event.currentTarget.files[0]);
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="w-full max-w-[800px] mx-auto my-10">
              <label htmlFor="shortDescription">Short Description</label>
              <br />
              <Field
                as="textarea"
                name="shortDescription"
                id="shortDescription"
                placeholder="Enter a short description about your pet here..."
                className="w-full max-w-[800px] mx-auto h-[200px] bg-transparent"
                required
              />
            </div>
            <div className="w-full max-w-[800px] mx-auto my-10">
              <label htmlFor="longDescription">Long Description</label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                id="longDescription"
                placeholder="Describe about your pet"
                className="w-full max-w-[800px] mx-auto h-[200px]"
                required
              />
            </div>
            <div className="text-center my-20">
              <button
                type="submit"
                className="text-white bg-orange-500 dark:bg-orange-600 hover:dark:bg-orange-700 hover:bg-orange-600 active:bg-orange-700 active:dark:bg-orange-800 px-8 py-2 rounded-xl"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPet;
