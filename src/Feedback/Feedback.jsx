import ContactUs from "@/Home/ContactUs";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Feedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    axios
      .post("https://petconnect-kappa.vercel.app/feedback", data)
      .then((data) => {
        if (data.data === "Thank you for submit Feedback") {
          toast.success(data.data, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        } else {
          toast.error(data.data, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      });
  };

  return (
    <div className="mx-10 md:mx-14 lg:mx-16">
      <hr className="border-2 border-dotted mt-6 lg:mt-24" />
      <section className="mt-4 lg:mt-9">
        <div className="mb-11">
          <h2 className="text-3xl mb-6 md:mb-8 lg:mb-10 md:text-4xl lg:text-5xl text-center dark:text-orange-400 text-orange-500 mt-4 font-bold">
            Get In Touch
          </h2>
          <p className="text-center w-[90%] lg:w-[50%] mx-auto">
            We love to hear from you! Whether you have questions about pet
            adoption, our services, or just want to share a heartwarming pet
            story, reach out to us. If you face any problems or have feedback,
            please let us know. Your input helps us create a better community
            for our furry friends. Let's stay connected!
          </p>
        </div>

        <hr className="border-2 border-dotted mb-9 lg:mt-10" />

        <div className="grid grid-cols-12 items-center justify-center gap-3">
          <div className="col-start-1 col-end-13 lg:col-start-1 lg:col-end-5 p-5 lg:p-12 rounded-lg">
            <ContactUs></ContactUs>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col col-start-1 col-end-13 lg:col-start-5 lg:col-end-13 mx-4"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:justify-between my-4 lg:my-12 items-center">
              <div className="w-[100%]">
                <label htmlFor="name" className="text-xl font-bold">
                  Your Name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="text-[1rem] w-[100%] py-5 pl-5 pr-28 rounded-md focus:bg-[#13131808] bg-[#13131803]"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="w-[100%]">
                <label htmlFor="email" className="text-xl font-bold">
                  Your Email
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="text-[1rem] w-[100%] py-5 pl-5 pr-28 rounded-md focus:bg-[#13131808] bg-[#13131803]"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:justify-between my-4 lg:my-12">
              <div className="w-[100%]">
                <label htmlFor="sub" className="text-xl font-bold">
                  Subject
                </label>
                <br />
                <input
                  type="text"
                  id="sub"
                  name="subject"
                  placeholder="Enter your Subject"
                  className="text-[1rem] w-[100%] py-5 pl-5 pr-28 rounded-md focus:bg-[#13131808] bg-[#13131803]"
                />
              </div>
              <div className="w-[100%]">
                <label htmlFor="phone" className="text-xl font-bold">
                  Your Phone Number
                </label>
                <br />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="text-[1rem] w-[100%] py-5 pl-5 pr-28 focus:outline-none focus:border-blue-100 rounded-md focus:bg-[#13131808] bg-[#13131803]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center lg:justify-between my-4 lg:my-12">
              <div id="textarea" className="w-[100%]">
                <label htmlFor="msg" className="text-xl font-bold">
                  Message
                </label>
                <br />
                <textarea
                  placeholder="Write your message"
                  id="msg"
                  name="message"
                  className="drop-shadow-xl p-4 rounded-lg w-[100%] h-44 lg:h-96 bg-transparent"
                />
              </div>
              <div className="w-[100%]">
                <button
                  type="submit"
                  className="bg-[#FF4240] p-4 text-white w-[100%] m-auto rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
