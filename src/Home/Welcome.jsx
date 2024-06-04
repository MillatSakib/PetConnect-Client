import React from "react";
import { MdOutlinePets } from "react-icons/md";
import billu from "/billu.jpg";

const Welcome = () => {
  return (
    <div className="my-10 md:my-14 lg:my-20">
      <div className="text-orange-500 text-2xl md:text-3xl flex justify-center lg:text-4xl">
        <MdOutlinePets />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center dark:text-orange-400 text-orange-500 mt-4 font-bold">
        Welcome to PetConncet
      </h2>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 w-[95%] md:w-[80%] lg:w-[65%] mx-auto pb-6 md:pb-8 lg:pb-12 my-8 md:my-10 lg:my-14">
        <div>
          <img
            src={billu}
            className="min-w-[400px] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg h-auto object-cover"
          ></img>
        </div>
        <div className="py-10 px-6 rounded-lg max-w-[95%] mx-auto ">
          <p className="text-lg md:text-xl mb-4">
            Welcome to Petconnect, a welcoming community for everyone who loves
            animals! Are you searching for a furry (or feathered, or scaled!)
            friend to fill your life with joy? Or maybe you're a dedicated pet
            parent looking for the perfect adoptive home for your cherished
            companion. Here at Petconnect, we understand the unique challenges
            and rewards of pet ownership. We're here to connect you with
            adoptable pets from shelters and rescues, as well as resources and
            support to ensure a smooth and happy transition for both you and
            your new pet. Let Petconnect be your partner in creating lifelong
            bonds between loving humans and amazing animals. pen_spark tune
            share more_vert
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
